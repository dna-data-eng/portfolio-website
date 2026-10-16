import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const skillGroups = [
  {
    label: "Database Administration",
    tags: [
      "PostgreSQL",
      "Roles & Permissions",
      "Backup & Restore",
      "Query Tuning",
      "VACUUM & ANALYZE",
      "Monitoring",
    ],
  },
  {
    label: "SQL & Design",
    tags: ["CTEs", "Window Functions", "Views", "Indexing", "Normalization"],
  },
  {
    label: "Tools",
    tags: [
      "pgAdmin",
      "psql",
      "pg_dump",
      "pg_stat_statements",
      "Ubuntu (WSL2)",
      "PowerShell",
      "Git & GitHub",
      "Python & pandas",
      "Supabase",
    ],
  },
  {
    label: "Languages",
    tags: ["English"],
  },
];

export default function About() {
  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="about">
      <div>
        <SectionHeader
          eyebrow="About"
          title="A bit about me"
          description="I care about databases that are reliable, secure, and recoverable."
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
                I&apos;m Dan Nyarkoh Andoh, an aspiring junior database administrator based in Cape Coast,
                Ghana, and a student at the University of Cape Coast. I design, secure, back up, and
                tune PostgreSQL databases.
              </p>
              <p>
                My practice covers advanced SQL (CTEs, views, indexing), query diagnosis with
                EXPLAIN ANALYZE, role-based access control, backup and restore with pg_dump, and
                routine maintenance with VACUUM and ANALYZE.
              </p>
              <p>
                I use AI tools like Gemini, Claude, and Ollama to support my learning and speed up
                routine work, and I verify what they produce before I rely on it.
              </p>
              <p>
                I am looking for an internship or entry-level role in database administration or
                database support, remote or on-site.
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
