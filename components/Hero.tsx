"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface HeroProps {
  onOpenModal: (type: "cv" | "resume", fileUrl: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const [ingestedCount, setIngestedCount] = useState<number | null>(null);
  const [cvUrl, setCvUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");

  const fetchLogsCount = async () => {
    try {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const { count, error } = await supabase
        .from("weather_logs")
        .select("*", { count: "exact", head: true })
        .gte("recorded_at", today.toISOString());

      if (error) {
        console.error("Supabase count query error:", error);
        setIngestedCount(1240);
        return;
      }
      setIngestedCount(count);
    } catch (e) {
      console.error(e);
      setIngestedCount(1240);
    }
  };

  useEffect(() => {
    const { data: cvData } = supabase.storage.from("Documents").getPublicUrl("cv.pdf");
    const { data: resumeData } = supabase.storage.from("Documents").getPublicUrl("resume.pdf");
    setCvUrl(cvData.publicUrl);
    setResumeUrl(resumeData.publicUrl);
  }, []);

  useEffect(() => {
    fetchLogsCount();
    const interval = setInterval(fetchLogsCount, 60000);
    return () => clearInterval(interval);
  }, []);

  const metaItems = [
    { label: "STATUS", value: "AVAILABLE" },
    { label: "TARGET", value: "DE / CH" },
    { label: "LEARNING", value: "🇩🇪 Deutsch" },
    {
      label: "GITHUB",
      value: "github.com/dna-data-eng",
      href: "https://github.com/dna-data-eng",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center px-gutter max-w-container-max mx-auto py-section-gap" id="hero">
      <div className="max-w-3xl">
        <h1 className="font-headline-xl text-headline-xl mb-2">
          <span className="text-[#00ff88]">D</span>
          <span className="text-[#e3e2e2]">N</span>
          <span className="text-[#00ff88]">A</span>
        </h1>
        <p className="font-metric-lg text-metric-lg text-[#888888] mb-6">
          Dan Nyarkoh Andoh · Data Engineer / Accra, Ghana 🇬🇭
        </p>
        <p className="text-xl text-[#888888] mb-10 max-w-xl leading-relaxed">
          Building data pipelines, engineering reliable infrastructure, and delivering insights at
          scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a
            className="bg-[#00ff88] text-[#00210c] font-metric-lg text-sm px-8 py-4 flex items-center justify-center gap-2 active:scale-95 transition-all hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
            href="#pipeline"
          >
            VIEW PIPELINE <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
          <div className="flex gap-4">
            <button
              className="border border-[#1f1f1f] hover:border-[#00ff88] text-[#00ff88] font-metric-lg text-sm px-6 py-4 flex items-center gap-2 hover:bg-[#00ff88]/10 transition-all active:scale-95"
              onClick={() => onOpenModal("cv", cvUrl)}
            >
              <span className="material-symbols-outlined text-sm">description</span> CV
            </button>
            <button
              className="border border-[#1f1f1f] hover:border-[#00ff88] text-[#00ff88] font-metric-lg text-sm px-6 py-4 flex items-center gap-2 hover:bg-[#00ff88]/10 transition-all active:scale-95"
              onClick={() => onOpenModal("resume", resumeUrl)}
            >
              <span className="material-symbols-outlined text-sm">article</span> RESUME
            </button>
          </div>
        </div>

        <div className="border-t border-[#1f1f1f] pt-4 mb-16 flex flex-wrap items-center gap-x-4 gap-y-2 font-code-md text-[10px] text-[#888888] uppercase tracking-wider">
          {metaItems.map((item, idx) => (
            <React.Fragment key={item.label}>
              {idx > 0 && <span className="text-[#1f1f1f] hidden sm:inline">|</span>}
              <span>
                {item.label}:{" "}
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00ff88] hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-[#e3e2e2]">{item.value}</span>
                )}
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Live Widget Card */}
        <div className="bg-[#111111] border border-[#1f1f1f] p-6 max-w-md hover:border-[#00ff88] transition-all duration-300 relative group overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <div className="pulse-container flex items-center justify-center">
                <div className="pulse-ring"></div>
                <div className="w-2 h-2 bg-[#00ff88] rounded-full relative z-10"></div>
              </div>
              <span className="font-label-sm text-label-sm text-[#888888] tracking-widest uppercase">
                System Status: Active
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-[#00ff88]">v2.4.0</span>
          </div>
          <div className="mb-4">
            <span className="font-metric-lg text-3xl text-[#e3e2e2] block mb-1">
              {ingestedCount === null ? "..." : ingestedCount.toLocaleString()}
            </span>
            <span className="font-code-md text-code-md text-[#888888]">Records ingested today</span>
          </div>
          <div className="h-16 w-full">
            <svg className="w-full h-full" viewBox="0 0 400 100">
              <path
                className="opacity-80"
                d="M0 80 Q 20 60, 40 70 T 80 40 T 120 60 T 160 30 T 200 50 T 240 20 T 280 40 T 320 10 T 360 30 T 400 5"
                fill="none"
                stroke="#00ff88"
                strokeWidth="2"
              ></path>
              <path
                className="opacity-20"
                d="M0 80 Q 20 60, 40 70 T 80 40 T 120 60 T 160 30 T 200 50 T 240 20 T 280 40 T 320 10 T 360 30 T 400 5 L 400 100 L 0 100 Z"
                fill="url(#grad-hero)"
              ></path>
              <defs>
                <linearGradient id="grad-hero" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#00ff88", stopOpacity: 1 }}></stop>
                  <stop offset="100%" style={{ stopColor: "#00ff88", stopOpacity: 0 }}></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
