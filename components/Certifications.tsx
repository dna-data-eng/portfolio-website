import React from "react";
import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: "workspace_premium",
    title: "Microsoft DP-300",
    subtitle: "Azure Database Administrator Associate",
    status: "In preparation",
    detail: "Exam not yet taken. I will add the credential here once I pass.",
  },
  {
    icon: "terminal",
    title: "PostgreSQL administration lab",
    subtitle: "Self-directed, hands-on training",
    status: "Practised",
    detail:
      "Roles and least privilege, backup and verified restore, query tuning, and routine maintenance.",
  },
];

export default function Certifications() {
  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="certifications">
      <SectionHeader
        eyebrow="Certifications & training"
        title="Credentials and training"
        description="Only credentials I have earned are listed as earned. Everything else is marked clearly."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <article key={item.title} className="card-interactive p-6">
            <div className="flex items-start justify-between gap-3 mb-4">
              <span className="w-10 h-10 rounded-md bg-[var(--color-brand-subtle)] flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--color-brand)]">
                  {item.icon}
                </span>
              </span>
              <span className="badge badge-brand">{item.status}</span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-fg-primary)]">{item.title}</h3>
            <p className="text-sm text-[var(--color-brand)] mt-0.5 mb-3">{item.subtitle}</p>
            <p className="text-sm text-[var(--color-fg-secondary)] leading-relaxed">
              {item.detail}
            </p>
          </article>
        ))}

        <div className="card border-dashed p-6 flex flex-col items-center justify-center text-center gap-2 min-h-[200px]">
          <span className="material-symbols-outlined text-[var(--color-fg-muted)] text-3xl">
            add_circle
          </span>
          <p className="text-sm text-[var(--color-fg-muted)] max-w-[220px]">
            More certificates will be added here as I earn them.
          </p>
        </div>
      </div>
    </section>
  );
}
