import React from "react";
import SectionHeader from "./SectionHeader";

type Project = {
  title: string;
  status?: string;
  description: string;
  tags: string[];
  icon: string;
  liveHref?: string;
  repoHref?: string;
};

const projectList: Project[] = [
  {
    title: "PostgreSQL Administration Lab",
    icon: "terminal",
    status: "Self-directed",
    description:
      "Hands-on practice with roles and least privilege, a full pg_dump backup restored and verified in a fresh database, and query tuning. Refreshing stale statistics with ANALYZE cut one query from 5.2 ms to 0.03 ms.",
    tags: ["PostgreSQL", "pg_dump", "EXPLAIN ANALYZE", "VACUUM & ANALYZE"],
  },
  {
    title: "Vision Publicity Database",
    icon: "print",
    status: "In progress",
    description:
      "A PostgreSQL database for a print shop covering customers, jobs, materials, and invoices. Planned scope: normalized schema, role-based access with least privilege, a tested backup and restore, and a stored procedure with a trigger.",
    tags: ["PostgreSQL", "Schema design", "Access control", "Backup & restore"],
  },
  {
    title: "Weather Database Project",
    icon: "partly_cloudy_day",
    description:
      "Fetches Accra weather readings from the OpenWeatherMap API through a Next.js route, stores them in a PostgreSQL table on Supabase, and charts the last 24 hours on this site.",
    tags: ["PostgreSQL", "Supabase", "Next.js", "OpenWeatherMap", "Recharts"],
    liveHref: "#pipeline",
    repoHref: "https://github.com/dna-data-eng/portfolio-website",
  },
];

export default function Projects() {
  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="projects">
      <SectionHeader
        eyebrow="Projects"
        title="Selected projects"
        description="Database work with a focus on reliability, security, and clear documentation."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project) => (
          <article key={project.title} className="card-interactive flex flex-col overflow-hidden">
            <div className="h-36 bg-[var(--color-canvas-subtle)] border-b border-[var(--color-stroke-subtle)] flex items-center justify-center">
              <span className="material-symbols-outlined text-5xl text-[var(--color-brand)]">
                {project.icon}
              </span>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold text-[var(--color-fg-primary)]">
                  {project.title}
                </h3>
                {project.status && <span className="badge">{project.status}</span>}
              </div>
              <p className="text-sm text-[var(--color-fg-secondary)] mb-5 flex-1 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="badge">
                    {tag}
                  </span>
                ))}
              </div>
              {(project.liveHref || project.repoHref) && (
                <div className="flex gap-2 pt-4 border-t border-[var(--color-stroke-subtle)]">
                  {project.liveHref && (
                    <a className="btn-primary flex-1 text-xs py-2" href={project.liveHref}>
                      View live
                    </a>
                  )}
                  {project.repoHref && (
                    <a
                      className="btn-secondary flex-1 text-xs py-2"
                      href={project.repoHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
