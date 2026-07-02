"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import SectionHeader from "./SectionHeader";

const dummyData = [
  { time: "00:00", temp: 26.5 },
  { time: "04:00", temp: 25.8 },
  { time: "08:00", temp: 28.0 },
  { time: "12:00", temp: 31.2 },
  { time: "16:00", temp: 29.5 },
  { time: "20:00", temp: 27.2 },
  { time: "NOW", temp: 28.4 },
];

const pipelineSteps = [
  {
    icon: "api",
    title: "API source",
    description: "Ingesting weather data for Accra via OpenWeatherMap REST endpoints.",
    live: false,
  },
  {
    icon: "input",
    title: "Ingest",
    description: "Scheduled ingestion with validation before downstream processing.",
    live: true,
  },
  {
    icon: "transform",
    title: "Transform",
    description: "Schema normalization and quality checks in Python.",
  },
  {
    icon: "database",
    title: "PostgreSQL",
    description: "Persistent storage with typed access patterns and reliable query performance.",
  },
  {
    icon: "monitoring",
    title: "Dashboard",
    description: "Live telemetry and trend visualization on this site.",
    final: true,
  },
];

export default function PipelineShowcase() {
  const [chartData, setChartData] = useState<any[]>(dummyData);
  const [avgTemp, setAvgTemp] = useState<string>("28.4");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const fetchWeatherData = async () => {
      try {
        const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
        const { data, error } = await supabase
          .from("weather_logs")
          .select("*")
          .gte("recorded_at", oneDayAgo.toISOString())
          .order("recorded_at", { ascending: true });

        if (error) {
          console.error("Error fetching weather logs:", error);
          return;
        }

        if (data && data.length >= 2) {
          const parsed = data.map((row: any) => ({
            time: new Date(row.recorded_at).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            }),
            temp: parseFloat(row.temp.toFixed(1)),
          }));
          setChartData(parsed);

          const sum = data.reduce((acc: number, row: any) => acc + row.temp, 0);
          setAvgTemp((sum / data.length).toFixed(1));
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="pipeline">
      <SectionHeader
        eyebrow="Pipeline"
        title="Live data pipeline"
        description="This pipeline pulls from an external API, stores records in PostgreSQL, and charts live weather data from Accra."
      />

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        <div className="flex-1 w-full space-y-3">
          {pipelineSteps.map((step, index) => (
            <div key={step.title} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                    step.final
                      ? "bg-[var(--color-brand)] text-[var(--color-brand-on)]"
                      : "bg-[var(--color-surface)] border border-[var(--color-stroke-subtle)] text-[var(--color-brand)]"
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{step.icon}</span>
                </div>
                {index < pipelineSteps.length - 1 && (
                  <div className="w-px h-10 bg-[var(--color-stroke-default)] my-1" />
                )}
              </div>
              <div className="card-interactive p-4 flex-1">
                <h4 className="text-sm font-semibold text-[var(--color-fg-primary)] mb-1 flex items-center gap-2">
                  {step.title}
                  {step.live && <span className="badge badge-brand text-[10px] py-0.5">Live</span>}
                </h4>
                <p className="text-sm text-[var(--color-fg-secondary)]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1 w-full card p-6 flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-base font-semibold text-[var(--color-fg-primary)]">
                Temperature trend
              </h3>
              <p className="text-sm text-[var(--color-fg-muted)] mt-1">Accra, last 24 hours</p>
            </div>
            <span className="material-symbols-outlined text-[var(--color-brand)]">insights</span>
          </div>

          <div className="flex-1 flex flex-col justify-center min-h-[220px]">
            {isMounted ? (
              <div className="w-full h-full min-h-[200px]">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="4" stroke="rgba(255,255,255,0.06)" vertical={false} />
                    <XAxis
                      dataKey="time"
                      stroke="#adadad"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#adadad"
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                      domain={["auto", "auto"]}
                      tickFormatter={(value) => `${value}°C`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1f1f1f",
                        borderColor: "rgba(255,255,255,0.12)",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "#adadad", fontSize: "12px" }}
                      itemStyle={{ color: "#00ff88", fontSize: "12px" }}
                      formatter={(value: any) => [`${value}°C`, "Temperature"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="temp"
                      stroke="#00ff88"
                      strokeWidth={2.5}
                      dot={false}
                      activeDot={{ r: 5, fill: "#00ff88" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="w-full h-auto animate-pulse flex flex-col justify-center items-center py-10">
                <svg className="w-full h-auto" viewBox="0 0 500 200" aria-hidden="true">
                  <path
                    d="M0 160 C 50 150, 100 170, 150 140 S 250 100, 300 120 S 400 80, 500 90"
                    fill="none"
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            )}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-lg p-4 bg-[var(--color-canvas-subtle)] border border-[var(--color-stroke-subtle)]">
              <span className="block text-xs text-[var(--color-fg-muted)] mb-1">Average</span>
              <span className="text-xl font-semibold text-[var(--color-fg-primary)]">{avgTemp}°C</span>
            </div>
            <div className="rounded-lg p-4 bg-[var(--color-canvas-subtle)] border border-[var(--color-stroke-subtle)]">
              <span className="block text-xs text-[var(--color-fg-muted)] mb-1">Uptime</span>
              <span className="text-xl font-semibold text-[var(--color-brand)]">99.9%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
