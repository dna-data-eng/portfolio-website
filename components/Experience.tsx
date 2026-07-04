import React from "react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    role: "Intern",
    company: "Agriculture Development Bank (ADB), Ghana",
    period: "1 month",
    type: "Internship",
    highlights: [
      "Assisted customers with account registration and loan applications at the branch.",
      "Used the ADB banking system, including Oracle applications, to search and retrieve customer account details.",
      "Supported front-line banking operations in a regulated financial environment.",
    ],
  },
  {
    role: "Print Shop Staff",
    company: "Vision Publicity, Ghana",
    period: "April 2022 to December 2024",
    type: "Full-time",
    highlights: [
      "Worked in print production for nearly three years, supporting daily operations at Vision Publicity.",
      "Managed client orders, production schedules, and quality checks before delivery.",
      "Built consistency, reliability, and attention to detail in a deadline-driven environment.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Where I have worked"
        description="Professional background across operations and banking, with a focus on reliability and structured work."
      />

      <div className="space-y-4 max-w-3xl">
        {experiences.map((job) => (
          <article key={`${job.company}-${job.role}`} className="card p-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-semibold text-[var(--color-fg-primary)]">
                  {job.role}
                </h3>
                <p className="text-sm text-[var(--color-brand)] mt-0.5">{job.company}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:text-right">
                <span className="badge">{job.type}</span>
                <span className="text-sm text-[var(--color-fg-muted)]">{job.period}</span>
              </div>
            </div>
            <ul className="space-y-2">
              {job.highlights.map((item) => (
                <li
                  key={item}
                  className="text-sm text-[var(--color-fg-secondary)] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-[var(--color-brand)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
