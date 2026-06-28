import React from "react";
import Image from "next/image";

const skillGroups = [
  {
    label: "Data Engineering",
    tags: [
      "PostgreSQL",
      "Python",
      "DDL/DML/DQL",
      "JOINs",
      "Window Functions",
      "pandas",
      "sqlalchemy",
      "Data Pipelines",
    ],
  },
  {
    label: "DevOps",
    tags: ["Docker", "Linux Ubuntu 24.04", "Git & GitHub", "Bash Scripting"],
  },
  {
    label: "Languages",
    tags: ["English", "Deutsch 🇩🇪 (Learning)"],
  },
];

export default function About() {
  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="about">
      <div>
        <p className="font-label-sm text-label-sm text-[#00ff88] tracking-widest uppercase mb-2">
          About
        </p>
        <h2 className="font-headline-lg text-headline-lg text-[#e3e2e2] mb-12">$ whoami</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 border border-[#1f1f1f] overflow-hidden">
              <Image
                src="/profile.jpeg"
                alt="Dan Nyarkoh Andoh"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>
          </div>

          <div>
            <div className="text-[#888888] text-sm leading-relaxed space-y-4 mb-10">
              <p>
                I&apos;m Dan Nyarkoh Andoh — a Data Engineer based in Accra, Ghana, building data
                pipelines, engineering reliable infrastructure, and extracting insights from
                complex datasets.
              </p>
              <p>
                My core stack centers on PostgreSQL for structured data storage, Python (pandas,
                sqlalchemy) for scripting and transformation, and Docker + Ubuntu 24.04 for clean,
                reproducible deployments.
              </p>
              <p>
                I leverage n8n and AI models like Google Gemini, Claude, and Ollama to automate
                and enhance data workflows.
              </p>
              <p>
                Currently targeting opportunities in Germany or Switzerland — learning Deutsch 🇩🇪
                to build my career in Europe.
              </p>
            </div>

            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h4 className="font-metric-lg text-[#00ff88] text-xs mb-3 uppercase tracking-wider">
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag, idx) => (
                      <span
                        key={tag}
                        className={`font-label-sm text-[10px] px-3 py-1 uppercase tracking-widest ${
                          idx === 0
                            ? "border border-[#00ff88] text-[#00ff88]"
                            : "border border-[#1f1f1f] text-[#888888]"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
