"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

interface HeroProps {
  onOpenModal: (type: "cv" | "resume", fileUrl: string) => void;
}

type LogLine = { kind: "cmd" | "out" | "ok" | "err"; text: string };

const labLog: LogLine[] = [
  { kind: "cmd", text: "pg_dump -U postgres -d sql_practice -f backup_file.sql" },
  { kind: "cmd", text: "psql -d sql_practice_restored -f backup_file.sql" },
  { kind: "ok", text: "restore verified: tables, views, data intact" },
  { kind: "cmd", text: "SELECT * FROM orders;  -- as analyst_jane" },
  { kind: "err", text: "ERROR: permission denied for table orders (42501)" },
  { kind: "cmd", text: "EXPLAIN ANALYZE SELECT * FROM completed_orders_backup;" },
  { kind: "out", text: "Execution Time: 5.209 ms" },
  { kind: "cmd", text: "ANALYZE completed_orders_backup;" },
  { kind: "out", text: "Execution Time: 0.027 ms" },
];

const features = [
  { icon: "backup", title: "Backup & recovery", detail: "Tested restores" },
  { icon: "lock", title: "Access control", detail: "Least privilege" },
  { icon: "speed", title: "Performance", detail: "EXPLAIN ANALYZE" },
  { icon: "cleaning_services", title: "Maintenance", detail: "VACUUM & ANALYZE" },
];

const lineColor: Record<LogLine["kind"], string> = {
  cmd: "text-[var(--color-fg-primary)]",
  out: "text-[var(--color-fg-muted)]",
  ok: "text-[var(--color-ok)]",
  err: "text-[var(--color-err)]",
};

export default function Hero({ onOpenModal }: HeroProps) {
  const [cvUrl, setCvUrl] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    const { data: cvData } = supabase.storage.from("Documents").getPublicUrl("cv.pdf");
    const { data: resumeData } = supabase.storage.from("Documents").getPublicUrl("resume.pdf");
    setCvUrl(cvData.publicUrl);
    setResumeUrl(resumeData.publicUrl);
  }, []);

  return (
    <section
      className="px-gutter max-w-container-max mx-auto min-h-[calc(100vh-4rem)] flex items-center py-16 lg:py-20"
      id="hero"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center w-full">
        <div className="lg:col-span-7">
          <span className="meta-pill font-mono-ui mb-6">
            <span className="status-dot" />
            Open to junior DBA roles and internships
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-[var(--color-fg-primary)] mb-6">
            Keeping{" "}
            <span className="text-[var(--color-brand)]">databases</span> secure, fast, and
            recoverable.
          </h1>

          <p className="text-base md:text-lg text-[var(--color-fg-secondary)] mb-8 max-w-xl leading-relaxed">
            Hi, I&apos;m Dan. An aspiring junior database administrator based in Cape Coast,
            Ghana, working with PostgreSQL on access control, backup and recovery, query tuning,
            and routine maintenance, with a growing focus on database security.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-4">
            <a className="btn-primary" href="#projects">
              View projects
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
            <a className="btn-secondary" href="#contact">
              Get in touch
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            <button type="button" className="btn-subtle" onClick={() => onOpenModal("cv", cvUrl)}>
              <span className="material-symbols-outlined text-base">description</span>
              CV
            </button>
            <button
              type="button"
              className="btn-subtle"
              onClick={() => onOpenModal("resume", resumeUrl)}
            >
              <span className="material-symbols-outlined text-base">article</span>
              Resume
            </button>
            <a
              href="https://github.com/dna-data-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-subtle"
            >
              <span className="material-symbols-outlined text-base">code</span>
              GitHub
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 pt-8 border-t border-[var(--color-stroke-subtle)]">
            {features.map((f) => (
              <div key={f.title}>
                <span className="material-symbols-outlined text-[var(--color-brand)] text-xl mb-2 block">
                  {f.icon}
                </span>
                <p className="font-mono-ui text-xs font-medium text-[var(--color-fg-primary)] mb-0.5">
                  {f.title}
                </p>
                <p className="text-xs text-[var(--color-fg-muted)]">{f.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="terminal" aria-label="Excerpt from my PostgreSQL practice lab log">
            <div className="terminal-bar">
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="terminal-dot" />
              <span className="font-mono-ui text-xs text-[var(--color-fg-muted)] ml-2">
                lab-log.sh
              </span>
            </div>
            <div className="p-5 font-mono-ui text-[12.5px] leading-relaxed space-y-2">
              {labLog.map((line, i) => (
                <p
                  key={i}
                  className={`log-line break-words ${lineColor[line.kind]} ${
                    line.kind === "out" ? "pl-4" : ""
                  }`}
                  style={{ animationDelay: `${i * 140}ms` }}
                >
                  {line.kind === "cmd" && (
                    <span className="text-[var(--color-brand)] mr-2">$</span>
                  )}
                  {line.kind === "ok" && <span className="mr-2">✓</span>}
                  {line.kind === "err" && <span className="mr-2">✗</span>}
                  {line.text}
                </p>
              ))}
            </div>
          </div>
          <p className="font-mono-ui text-xs text-[var(--color-fg-muted)] mt-3">
            From my PostgreSQL practice lab
          </p>
        </div>
      </div>
    </section>
  );
}
