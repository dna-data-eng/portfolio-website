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

const dummyData = [
  { time: "00:00", temp: 26.5 },
  { time: "04:00", temp: 25.8 },
  { time: "08:00", temp: 28.0 },
  { time: "12:00", temp: 31.2 },
  { time: "16:00", temp: 29.5 },
  { time: "20:00", temp: 27.2 },
  { time: "NOW", temp: 28.4 },
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
      <div className="mb-12">
        <h2 className="font-headline-lg text-headline-lg text-[#e3e2e2] mb-2">Live Data Pipeline</h2>
        <p className="text-[#e3e2e2]">End-to-end — from raw API to visual insight</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch">
        {/* Vertical Flow */}
        <div className="flex-1 w-full space-y-4">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#1f2020] border border-[#1f1f1f] flex items-center justify-center text-[#00ff88]">
                <span className="material-symbols-outlined" data-icon="api">
                  api
                </span>
              </div>
              <div className="w-px h-12 bg-[#3b4b3d]"></div>
            </div>
            <div className="bg-[#1f2020] border border-[#1f1f1f] p-4 flex-1 hover:border-[#00ff88] transition-colors duration-300">
              <h4 className="font-metric-lg text-sm mb-1 uppercase">API Source</h4>
              <p className="text-[#e3e2e2] text-sm">
                Ingesting weather & traffic data via REST endpoints.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#1f2020] border border-[#1f1f1f] flex items-center justify-center text-[#00ff88] relative">
                <span className="material-symbols-outlined" data-icon="input">
                  input
                </span>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#00ff88] rounded-full animate-ping"></div>
              </div>
              <div className="w-px h-12 bg-[#3b4b3d]"></div>
            </div>
            <div className="bg-[#1f2020] border border-[#1f1f1f] p-4 flex-1 hover:border-[#00ff88] transition-colors duration-300">
              <h4 className="font-metric-lg text-sm mb-1 uppercase">
                Ingest <span className="text-xs text-[#00ff88] ml-2 tracking-tighter">LIVE</span>
              </h4>
              <p className="text-[#e3e2e2] text-sm">
                Asynchronous queue processing with Python and Redis.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#1f2020] border border-[#1f1f1f] flex items-center justify-center text-[#00ff88]">
                <span className="material-symbols-outlined" data-icon="transform">
                  transform
                </span>
              </div>
              <div className="w-px h-12 bg-[#3b4b3d]"></div>
            </div>
            <div className="bg-[#1f2020] border border-[#1f1f1f] p-4 flex-1 hover:border-[#00ff88] transition-colors duration-300">
              <h4 className="font-metric-lg text-sm mb-1 uppercase">Transform</h4>
              <p className="text-[#e3e2e2] text-sm font-body-md">
                Schema validation and normalization using dbt models.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#1f2020] border border-[#1f1f1f] flex items-center justify-center text-[#00ff88]">
                <span className="material-symbols-outlined" data-icon="database">
                  database
                </span>
              </div>
              <div className="w-px h-12 bg-[#3b4b3d]"></div>
            </div>
            <div className="bg-[#1f2020] border border-[#1f1f1f] p-4 flex-1 hover:border-[#00ff88] transition-colors duration-300">
              <h4 className="font-metric-lg text-sm mb-1 uppercase">Supabase</h4>
              <p className="text-[#e3e2e2] text-sm">
                High-performance storage on PostgreSQL backend.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-[#00ff88] flex items-center justify-center text-[#0a0a0a]">
                <span className="material-symbols-outlined" data-icon="monitoring">
                  monitoring
                </span>
              </div>
            </div>
            <div className="bg-[#1f2020] border border-[#1f1f1f] p-4 flex-1 hover:border-[#00ff88] transition-colors duration-300">
              <h4 className="font-metric-lg text-sm mb-1 uppercase">Dashboard</h4>
              <p className="text-[#e3e2e2] text-sm">Real-time telemetry and KPI visualization.</p>
            </div>
          </div>
        </div>

        {/* Dashboard Widget */}
        <div className="flex-1 w-full bg-[#1f2020] border border-[#1f1f1f] p-8 flex flex-col hover:border-[#00ff88] transition-colors duration-300">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-metric-lg text-[#e3e2e2]">Live Temperature Data</h3>
              <p className="font-code-md text-[#e3e2e2]">Accra - Last 24hrs</p>
            </div>
            <span className="material-symbols-outlined text-[#00ff88]">settings</span>
          </div>

          <div className="flex-1 flex flex-col justify-center min-h-[220px]">
            {isMounted ? (
              <div className="w-full h-full min-h-[200px]">
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="4" stroke="#1f1f1f" vertical={false} />
                    <XAxis
                      dataKey="time"
                      stroke="#888888"
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                      domain={["auto", "auto"]}
                      tickFormatter={(value) => `${value}°C`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#111111",
                        borderColor: "#1f1f1f",
                        borderRadius: "0.25rem",
                      }}
                      labelStyle={{ color: "#888888", fontSize: "12px" }}
                      itemStyle={{ color: "#00ff88", fontSize: "12px" }}
                      formatter={(value: any) => [`${value}°C`, "Temperature"]}
                    />
                    <Line
                      type="monotone"
                      dataKey="temp"
                      stroke="#00ff88"
                      strokeWidth={3}
                      dot={false}
                      activeDot={{ r: 6, fill: "#00ff88" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="w-full h-auto animate-pulse flex flex-col justify-center items-center py-10">
                <svg className="w-full h-auto" viewBox="0 0 500 200">
                  <path
                    d="M0 160 C 50 150, 100 170, 150 140 S 250 100, 300 120 S 400 80, 500 90"
                    fill="none"
                    stroke="#1f1f1f"
                    strokeWidth="3"
                  ></path>
                </svg>
              </div>
            )}
            <div className="flex justify-between mt-4 font-label-sm text-[#e3e2e2]">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>NOW</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="p-4 bg-[#0a0a0a]/50 border border-[#3b4b3d]">
              <span className="block text-xs uppercase tracking-widest text-[#e3e2e2] mb-1">
                Average
              </span>
              <span className="font-metric-lg text-xl text-[#e3e2e2]">{avgTemp}°C</span>
            </div>
            <div className="p-4 bg-[#0a0a0a]/50 border border-[#3b4b3d]">
              <span className="block text-xs uppercase tracking-widest text-[#e3e2e2] mb-1">
                Uptime
              </span>
              <span className="font-metric-lg text-xl text-[#00ff88]">99.9%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
