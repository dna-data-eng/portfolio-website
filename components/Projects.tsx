import React from "react";
import SectionHeader from "./SectionHeader";

type Project = {
  title: string;
  status?: string;
  description: string;
  tags: string[];
  image?: string;
  liveHref?: string;
  repoHref?: string;
};

const projectList: Project[] = [
  {
    title: "Weather Database Project",
    description:
      "Fetches Accra weather readings from the OpenWeatherMap API through a Next.js route, stores them in a PostgreSQL table on Supabase, and charts the last 24 hours on this site.",
    tags: ["PostgreSQL", "Supabase", "Next.js", "OpenWeatherMap", "Recharts"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCm_nFM9xJ5JeWylTD5EQkU5qS3w4yubzihxaIbmir9TfGbv7hdYqkT8loOoAl20ZW3hMgJ1UXKafzt5ICvddDEulFo5RCGseV8tUJeSf8oaPC7RHH_QXJiXAND9JyDX4quUlbOZNjFQhNgcNxMpW-dY87q6HbvoeCxKumUI3jjQyKDLqy0lW2_qaC6OXrkwT7NmvJXwsK-ZwnXYcPvZv0FEvGuu3wiBROQ6Kren3-E2WjdDsacjUKr4Cl2LcRJnufZOCBt8U3pBIy3",
    liveHref: "#pipeline",
    repoHref: "https://github.com/dna-data-eng/portfolio-website",
  },
  {
    title: "Vision Publicity Database",
    status: "In progress",
    description:
      "A PostgreSQL database for a print shop covering customers, jobs, materials, and invoices. Planned scope: normalized schema, role-based access with least privilege, a tested backup and restore, and a stored procedure with a trigger.",
    tags: ["PostgreSQL", "Schema design", "Access control", "Backup & restore"],
  },
];

export default function Projects() {
  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="projects">
      <SectionHeader
        eyebrow="Work"
        title="Selected projects"
        description="Database work with a focus on reliability, security, and clear documentation."
      />

      <div className="mb-8">
        <span className="badge badge-brand">Database projects</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((project) => (
          <article key={project.title} className="card-interactive flex flex-col overflow-hidden">
            <div className="h-44 bg-[var(--color-canvas-subtle)] overflow-hidden flex items-center justify-center">
              {project.image ? (
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
              ) : (
                <span className="material-symbols-outlined text-5xl text-[var(--color-brand)]">
                  database
                </span>
              )}
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
