import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    label: "Data Engineering",
    tags: [
      "PostgreSQL",
      "Python",
      "pandas",
      "sqlalchemy",
      "Data Pipelines",
      "Window Functions",
    ],
  },
  {
    label: "DevOps",
    tags: ["Docker", "Ubuntu 24.04", "Git & GitHub", "Bash Scripting"],
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
        <SectionHeader
          eyebrow="About"
          title="A bit about me"
          description="Engineer first — I care about systems that are reliable, readable, and built to last."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-72 h-72 rounded-xl overflow-hidden ring-1 ring-[var(--color-stroke-default)] shadow-[var(--shadow-elevated)]">
              <Image
                src="/profile.jpeg"
                alt="Dan Nyarkoh Andoh"
                fill
                className="object-cover"
                sizes="288px"
                priority
              />
            </div>
          </div>

          <div>
            <div className="text-[var(--color-fg-secondary)] text-base leading-relaxed space-y-4 mb-10">
              <p>
                I&apos;m Dan Nyarkoh Andoh — a Data Engineer based in Accra, Ghana. I build data
                pipelines, engineer reliable infrastructure, and extract insights from complex
                datasets.
              </p>
              <p>
                My core stack centers on PostgreSQL for structured storage, Python (pandas,
                sqlalchemy) for transformation, and Docker on Ubuntu for reproducible deployments.
              </p>
              <p>
                I also use n8n and AI tools like Gemini, Claude, and Ollama to automate and improve
                data workflows — always with guardrails and observability in mind.
              </p>
              <p>
                I&apos;m currently looking for opportunities in Germany or Switzerland, and
                learning Deutsch 🇩🇪 to grow my career in Europe.
              </p>
            </div>

            <div className="space-y-6">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h4 className="text-sm font-semibold text-[var(--color-fg-primary)] mb-3">
                    {group.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <span key={tag} className="badge">
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
