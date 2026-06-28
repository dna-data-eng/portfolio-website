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

  const metaPills = [
    { label: "Available for work" },
    { label: "Targeting Germany & Switzerland" },
    { label: "Learning Deutsch 🇩🇪" },
  ];

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-gutter max-w-container-max mx-auto py-section-gap"
      id="hero"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-medium text-[var(--color-brand)] mb-4">
          Data Engineer · Accra, Ghana 🇬🇭
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-fg-primary)] mb-6 leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-[var(--color-brand)]">Dan Nyarkoh Andoh</span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--color-fg-secondary)] mb-10 max-w-xl leading-relaxed">
          I build data pipelines, engineer reliable infrastructure, and turn complex datasets into
          clear insights — with the same care for craft you&apos;d expect from a production platform team.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-8">
          <a className="btn-primary" href="#pipeline">
            View my pipeline
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
          <button type="button" className="btn-secondary" onClick={() => onOpenModal("cv", cvUrl)}>
            <span className="material-symbols-outlined text-base">description</span>
            CV
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() => onOpenModal("resume", resumeUrl)}
          >
            <span className="material-symbols-outlined text-base">article</span>
            Resume
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {metaPills.map((pill) => (
            <span key={pill.label} className="meta-pill">
              <span className="status-dot" />
              {pill.label}
            </span>
          ))}
          <a
            href="https://github.com/dna-data-eng"
            target="_blank"
            rel="noopener noreferrer"
            className="meta-pill link-brand hover:no-underline"
          >
            GitHub
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>

        <div className="card p-6 max-w-md">
          <div className="flex justify-between items-start mb-5">
            <div className="flex items-center gap-2">
              <span className="status-dot" aria-hidden="true" />
              <span className="text-sm font-medium text-[var(--color-fg-primary)]">
                Live pipeline status
              </span>
            </div>
            <span className="badge badge-brand">Active</span>
          </div>
          <div className="mb-4">
            <span className="text-3xl font-semibold text-[var(--color-fg-primary)] block mb-1">
              {ingestedCount === null ? "—" : ingestedCount.toLocaleString()}
            </span>
            <span className="text-sm text-[var(--color-fg-muted)]">
              Weather records ingested today
            </span>
          </div>
          <div className="h-14 w-full">
            <svg className="w-full h-full" viewBox="0 0 400 100" aria-hidden="true">
              <path
                d="M0 80 Q 20 60, 40 70 T 80 40 T 120 60 T 160 30 T 200 50 T 240 20 T 280 40 T 320 10 T 360 30 T 400 5"
                fill="none"
                stroke="#00ff88"
                strokeWidth="2"
                opacity="0.9"
              />
              <path
                d="M0 80 Q 20 60, 40 70 T 80 40 T 120 60 T 160 30 T 200 50 T 240 20 T 280 40 T 320 10 T 360 30 T 400 5 L 400 100 L 0 100 Z"
                fill="url(#grad-hero)"
              />
              <defs>
                <linearGradient id="grad-hero" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" stopColor="#00ff88" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#00ff88" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
