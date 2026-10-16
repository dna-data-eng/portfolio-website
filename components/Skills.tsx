import React from "react";
import SectionHeader from "./SectionHeader";

const skillCards = [
  {
    icon: "storage",
    title: "Database administration",
    items: [
      { name: "Roles & permissions", detail: "GRANT/REVOKE, group roles, least privilege" },
      { name: "Backup & recovery", detail: "pg_dump, psql restore, verified restores" },
      { name: "Monitoring & tuning", detail: "EXPLAIN ANALYZE, pg_stat_statements, indexing" },
      { name: "Maintenance", detail: "VACUUM and ANALYZE" },
    ],
  },
  {
    icon: "database",
    title: "SQL & design",
    items: [
      { name: "SQL / PostgreSQL", detail: "CTEs, window functions, subqueries" },
      { name: "Database design", detail: "ER modeling, normalization to 3NF, keys" },
      { name: "Views & CTAS", detail: "Reusable queries and table snapshots" },
      { name: "Python & pandas", detail: "Data cleaning and scripting" },
    ],
  },
  {
    icon: "shield",
    title: "Security",
    items: [
      { name: "Access control", detail: "Least privilege, role groups, permission testing" },
      { name: "Key management", detail: "Keys belong in a secrets manager, not in code" },
      { name: "Studying", detail: "Encryption, auditing, row-level security" },
    ],
  },
];

const learning = [
  "Database security: encryption, auditing, row-level security",
  "Stored procedures and triggers",
  "Cloud managed databases and SQL Server basics",
  "Scripting and scheduled maintenance jobs",
];

export default function Skills() {
  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="skills">
      <SectionHeader
        eyebrow="Technical skills"
        title="What I bring to a team"
        description="Hands-on PostgreSQL administration skills and a careful, verify-first approach to working with data."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {skillCards.map((card) => (
          <div key={card.title} className="card-interactive p-6">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[var(--color-stroke-subtle)]">
              <span className="w-9 h-9 rounded-md bg-[var(--color-brand-subtle)] flex items-center justify-center">
                <span className="material-symbols-outlined text-[var(--color-brand)] text-xl">
                  {card.icon}
                </span>
              </span>
              <h3 className="text-base font-semibold text-[var(--color-fg-primary)]">
                {card.title}
              </h3>
            </div>
            <ul className="space-y-4">
              {card.items.map((item) => (
                <li key={item.name}>
                  <span className="block text-sm font-medium text-[var(--color-fg-primary)]">
                    {item.name}
                  </span>
                  <span className="block text-xs text-[var(--color-fg-muted)] mt-0.5 leading-relaxed">
                    {item.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="card p-6 border-dashed">
          <div className="flex items-center gap-3 mb-5 pb-4 border-b border-[var(--color-stroke-subtle)]">
            <span className="w-9 h-9 rounded-md bg-[var(--color-brand-subtle)] flex items-center justify-center">
              <span className="material-symbols-outlined text-[var(--color-brand)] text-xl">
                school
              </span>
            </span>
            <h3 className="text-base font-semibold text-[var(--color-fg-primary)]">
              Currently learning
            </h3>
          </div>
          <ul className="space-y-4">
            {learning.map((item) => (
              <li
                key={item}
                className="text-sm text-[var(--color-fg-secondary)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-brand)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
