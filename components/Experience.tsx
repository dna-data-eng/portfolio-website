import React from "react";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    role: "Graphic Designer and Large-Format Operator",
    company: "Vision Publicity, Ghana",
    period: "April 2022 to Present",
    type: "Full-time",
    highlights: [
      "Produce large-format print jobs such as banners, posters, and signage for clients.",
      "Operate large-format printing equipment and check output for color accuracy and print quality before delivery.",
      "Meet client deadlines and manage orders accurately under time pressure.",
    ],
  },
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
    role: "Teacher",
    company: "PROMABS, Ghana",
    period: "January 2022 to April 2022",
    type: "Teaching",
    highlights: [
      "Taught students, prepared lessons, and assessed student progress.",
      "Managed classroom activities and communicated clearly with students.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Where I have worked"
        description="Professional background across print production, banking, and teaching, with a focus on reliability and structured work."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {experiences.map((job) => (
          <article key={`${job.company}-${job.role}`} className="card-interactive p-6 flex flex-col">
            <div className="flex flex-col gap-3 mb-5">
              <div>
                <h3 className="text-base font-semibold text-[var(--color-fg-primary)]">
                  {job.role}
                </h3>
                <p className="text-sm text-[var(--color-brand)] mt-0.5">{job.company}</p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge badge-brand">{job.type}</span>
                <span className="font-mono-ui text-xs text-[var(--color-fg-muted)]">{job.period}</span>
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
