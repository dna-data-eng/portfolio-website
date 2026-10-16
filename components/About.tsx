import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";

const facts = [
  { icon: "location_on", label: "Based in", value: "Cape Coast, Ghana" },
  { icon: "school", label: "Studying", value: "University of Cape Coast" },
  { icon: "public", label: "Open to", value: "Remote, on-site, relocation" },
];

export default function About() {
  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="about">
      <SectionHeader
        eyebrow="About"
        title="A bit about me"
        description="I care about databases that are reliable, secure, and recoverable."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div className="lg:col-span-4">
          <div className="relative w-full max-w-xs mx-auto lg:mx-0 aspect-square rounded-xl overflow-hidden ring-1 ring-[var(--color-stroke-default)] shadow-[var(--shadow-elevated)]">
            <Image
              src="/profile.jpeg"
              alt="Dan Nyarkoh Andoh"
              fill
              className="object-cover"
              sizes="320px"
              priority
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="text-[var(--color-fg-secondary)] text-base md:text-lg leading-relaxed space-y-4 mb-8">
            <p>
              I&apos;m Dan Nyarkoh Andoh, an aspiring junior database administrator based in Cape
              Coast, Ghana, and a student at the University of Cape Coast. I design, secure, back
              up, and tune PostgreSQL databases.
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {facts.map((fact) => (
              <div key={fact.label} className="card p-4">
                <span className="material-symbols-outlined text-[var(--color-brand)] text-xl mb-2 block">
                  {fact.icon}
                </span>
                <p className="font-mono-ui text-[11px] uppercase tracking-wider text-[var(--color-fg-muted)] mb-1">
                  {fact.label}
                </p>
                <p className="text-sm font-medium text-[var(--color-fg-primary)]">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
