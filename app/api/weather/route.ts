import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function GET() {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OPENWEATHER_API_KEY environment variable is not set." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=${apiKey}&units=metric`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      const errText = await res.text();
      return NextResponse.json(
        { error: `Failed to fetch weather from OpenWeatherMap: ${errText}` },
        { status: res.status }
      );
    }

    const weatherData = await res.json();
    const temp = weatherData.main.temp;
    const description = weatherData.weather[0]?.description || "";

    const { data, error } = await supabase
      .from("weather_logs")
      .insert([
        {
          temp,
          description,
          recorded_at: new Date().toISOString(),
        },
      ])
      .select();

    if (error) {
      console.error("Error inserting weather log to Supabase:", error);
      return NextResponse.json(
        { error: `Failed to store weather log in Supabase: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Error in weather api route:", err);
    return NextResponse.json(
      { error: err.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
