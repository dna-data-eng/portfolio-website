"use client";

import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

type FilterCategory = "all" | "data-engineering";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const projectList = [
    {
      title: "Weather Pipeline",
      description:
        "End-to-end pipeline ingesting real-time weather data for Accra via OpenWeatherMap API, storing readings in Supabase PostgreSQL, and visualizing temperature trends live on this dashboard.",
      tags: ["PostgreSQL", "Python", "Supabase", "OpenWeatherMap", "Next.js", "Recharts"],
      category: "data-engineering" as const,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCm_nFM9xJ5JeWylTD5EQkU5qS3w4yubzihxaIbmir9TfGbv7hdYqkT8loOoAl20ZW3hMgJ1UXKafzt5ICvddDEulFo5RCGseV8tUJeSf8oaPC7RHH_QXJiXAND9JyDX4quUlbOZNjFQhNgcNxMpW-dY87q6HbvoeCxKumUI3jjQyKDLqy0lW2_qaC6OXrkwT7NmvJXwsK-ZwnXYcPvZv0FEvGuu3wiBROQ6Kren3-E2WjdDsacjUKr4Cl2LcRJnufZOCBt8U3pBIy3",
    },
    {
      title: "Ghana Economic Dashboard",
      description:
        "Visualizing national fiscal data through a custom-built API and real-time frontend dashboard.",
      tags: ["PostgreSQL", "React", "D3.js"],
      category: "data-engineering" as const,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_uyFtR5AuZqGLw8550oEYLxTQNfzEArKntmIkCzZ4dqqzUfTbnxXFdeSJxr4tpc_NzlDJHRmPlDmeFP_5ht0_HaX1r4H2rKc3j7IxS8QOvZ2JoyCanyEIkmpMCqVj4uIvu1Nu6KwxDTjq6p8073foUm0KaSxGZYyY-esV5XsC0e_VkjpqUgA6dBBIE9jpP2qY8W7nLIX0l6-Gte34qCY10hfJM_WIW6tBzsRyywy-StP9sXkoyGdA6wbQJ6S6qU_iaMp1npOS__yV",
    },
    {
      title: "GitHub Activity Tracker",
      description:
        "Aggregating and analyzing commit patterns across large-scale open-source repositories.",
      tags: ["Go", "Redis", "Docker"],
      category: "data-engineering" as const,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC7WNEMlueNi0zqmVNRQviAq3JyuiuLKn0IQcekJfQR_LL-usG6NtRpXxay6pBRC0iMQmVvdNGJQxg1PWQjagE8QorxKCVVSkidZJCjDNhzVDuLEBms4rD0e7d-eyXYswR8jmRCimM5tS5PEOEmAZSmaR0CPl7x4UibIEXOYhqZwkE8QYorI2cT05hhLtVC1U3-3An6Mb4PD0Ey_ilh2Fm49Z3LifjjqbXGQdE2HL5xICKM8ISUCgHt_JAJpD-EqcWYI9Bh2mVBrxL0",
    },
  ];

  const filters: { id: FilterCategory; label: string }[] = [
    { id: "all", label: "All projects" },
    { id: "data-engineering", label: "Data engineering" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectList
      : projectList.filter((p) => p.category === activeFilter);

  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="projects">
      <SectionHeader
        eyebrow="Work"
        title="Selected projects"
        description="Real systems I've built — focused on reliability, clarity, and measurable outcomes."
      />

      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => setActiveFilter(filter.id)}
            className={`btn-subtle ${activeFilter === filter.id ? "is-active" : ""}`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <article
            key={idx}
            data-cat={project.category}
            className="card-interactive flex flex-col overflow-hidden"
          >
            <div className="h-44 bg-[var(--color-canvas-subtle)] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                style={{ backgroundImage: `url('${project.image}')` }}
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-[var(--color-fg-primary)] mb-2">
                {project.title}
              </h3>
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
              <div className="flex gap-2 pt-4 border-t border-[var(--color-stroke-subtle)]">
                <a className="btn-primary flex-1 text-xs py-2" href="#">
                  View live
                </a>
                <a className="btn-secondary flex-1 text-xs py-2" href="#">
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
