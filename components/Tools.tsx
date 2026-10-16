import React from "react";
import SectionHeader from "./SectionHeader";

type Status = "Practised" | "Learning" | "Used at work" | "Planned";

const statusDot: Record<Status, string> = {
  Practised: "bg-[var(--color-brand)]",
  Learning: "bg-[var(--color-warn)]",
  "Used at work": "bg-[var(--color-ok)]",
  Planned: "bg-[var(--color-fg-muted)]",
};

const toolGroups: { title: string; tools: { name: string; status: Status }[] }[] = [
  {
    title: "Databases",
    tools: [
      { name: "PostgreSQL", status: "Practised" },
      { name: "SQL Server", status: "Learning" },
      { name: "Oracle applications", status: "Used at work" },
      { name: "Supabase", status: "Practised" },
    ],
  },
  {
    title: "Database tools",
    tools: [
      { name: "pgAdmin", status: "Practised" },
      { name: "psql", status: "Practised" },
      { name: "pg_dump", status: "Practised" },
      { name: "pg_stat_statements", status: "Practised" },
    ],
  },
  {
    title: "Environment",
    tools: [
      { name: "Ubuntu (WSL2)", status: "Practised" },
      { name: "PowerShell", status: "Practised" },
      { name: "Git & GitHub", status: "Practised" },
    ],
  },
  {
    title: "Languages and cloud",
    tools: [
      { name: "SQL", status: "Practised" },
      { name: "Python & pandas", status: "Practised" },
      { name: "Cloud managed databases", status: "Planned" },
    ],
  },
];

const legend: Status[] = ["Practised", "Learning", "Used at work", "Planned"];

export default function Tools() {
  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="tools">
      <SectionHeader
        eyebrow="Tools & technologies"
        title="What I work with"
        description="Each tool is marked with how I have used it, so you can see what is practised and what is still ahead."
        className="mb-8"
      />

      <div className="flex flex-wrap gap-4 mb-8">
        {legend.map((status) => (
          <span
            key={status}
            className="font-mono-ui text-xs text-[var(--color-fg-muted)] inline-flex items-center gap-2"
          >
            <span className={`w-2 h-2 rounded-full ${statusDot[status]}`} />
            {status}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {toolGroups.map((group) => (
          <div key={group.title} className="card p-6">
            <h3 className="font-mono-ui text-xs uppercase tracking-wider text-[var(--color-fg-muted)] mb-4">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <span key={tool.name} className="status-chip">
                  <span className={`w-1.5 h-1.5 rounded-full ${statusDot[tool.status]}`} />
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
