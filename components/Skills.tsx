import React from "react";
import SectionHeader from "./SectionHeader";

const skillCategories = [
  {
    title: "Database administration",
    items: [
      { name: "Roles & permissions", detail: "GRANT/REVOKE, group roles, least privilege" },
      { name: "Backup & recovery", detail: "pg_dump, psql restore, verified restores" },
      { name: "Monitoring & tuning", detail: "EXPLAIN ANALYZE, pg_stat_statements, indexing" },
      { name: "Maintenance", detail: "VACUUM and ANALYZE" },
    ],
  },
  {
    title: "Foundations",
    items: [
      { name: "SQL / PostgreSQL", detail: "CTEs, views, window functions, subqueries" },
      { name: "Database design", detail: "ER modeling, normalization to 3NF, keys" },
      { name: "Linux & Git", detail: "Ubuntu, Bash, version control" },
      { name: "Python & pandas", detail: "Data cleaning and scripting" },
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
        eyebrow="Skills"
        title="What I bring to a team"
        description="Hands-on PostgreSQL administration skills and a careful, verify-first approach to working with data."
        className="mb-10"
      />

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="card p-5">
              <h4 className="text-sm font-semibold text-[var(--color-fg-primary)] mb-4 pb-3 border-b border-[var(--color-stroke-subtle)]">
                {category.title}
              </h4>
              <ul className="space-y-4">
                {category.items.map((item) => (
                  <li key={item.name}>
                    <span className="block text-sm font-medium text-[var(--color-fg-primary)]">
                      {item.name}
                    </span>
                    <span className="block text-xs text-[var(--color-fg-muted)] mt-0.5">
                      {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex-1 lg:max-w-md">
          <div className="card p-6 h-full">
            <h4 className="text-sm font-semibold text-[var(--color-fg-primary)] mb-6">
              Currently learning
            </h4>
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
      </div>
    </section>
  );
}
