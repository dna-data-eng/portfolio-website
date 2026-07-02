"use client";

import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: "Core engineering",
      items: [
        { name: "Python", detail: "ETL, automation & data quality" },
        { name: "SQL / PostgreSQL", detail: "Modeling, optimization & analytics" },
        { name: "Docker & Linux", detail: "Reproducible deployments" },
        { name: "Git & GitHub", detail: "Version control & collaborative workflows" },
      ],
    },
    {
      title: "Data platform",
      items: [
        { name: "PostgreSQL", detail: "Production storage & schema design" },
        { name: "pandas & sqlalchemy", detail: "Transformation pipelines" },
      ],
    },
  ];

  const competencies = [
    { name: "Python", value: 95 },
    { name: "SQL & PostgreSQL", value: 92 },
    { name: "Pipeline design", value: 88 },
    { name: "Cloud & DevOps", value: 82 },
  ];

  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="skills">
      <SectionHeader
        eyebrow="Skills"
        title="What I bring to a team"
        description="Strong data engineering skills and a practical focus on shipping and maintaining production systems."
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
              Strength overview
            </h4>
            <div className="space-y-5">
              {competencies.map((comp) => (
                <div key={comp.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-[var(--color-fg-secondary)]">{comp.name}</span>
                    <span className="text-[var(--color-fg-muted)] font-medium">{comp.value}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[var(--color-canvas-subtle)] overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: animate ? `${comp.value}%` : "0%",
                        background: "var(--color-brand)",
                      }}
                    />
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
