"use client";

import React, { useState } from "react";
import SectionHeader from "./SectionHeader";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:ynyarkoh1@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", message: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const infoItems = [
    { label: "Status", value: "Open to opportunities", highlight: true },
    { label: "Location", value: "Accra, Ghana 🇬🇭" },
    { label: "Focus", value: "Data Engineering" },
    { label: "Target markets", value: "Germany & Switzerland" },
  ];

  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="contact">
      <SectionHeader
        eyebrow="Contact"
        title="Let's work together"
        description="Have a role, project, or question? Send a message. I typically respond within a few days."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-[var(--color-fg-primary)] mb-5">
              Get in touch
            </h3>
            <dl className="space-y-4">
              {infoItems.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-medium text-[var(--color-fg-muted)] mb-1">
                    {item.label}
                  </dt>
                  <dd
                    className={`text-sm ${
                      item.highlight
                        ? "text-[var(--color-brand)] font-medium"
                        : "text-[var(--color-fg-secondary)]"
                    }`}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/dna-data-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1"
            >
              <span className="material-symbols-outlined text-base">code</span>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/dan-nyarkoh-andoh-313a383b2"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1"
            >
              <span className="material-symbols-outlined text-base">person</span>
              LinkedIn
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-fg-primary)] mb-2">
              Your name
            </label>
            <input
              id="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Jane Smith"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-fg-primary)] mb-2">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="input-field"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-[var(--color-fg-primary)] mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell me about the role or project you have in mind..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="input-field resize-none"
            />
          </div>
          <button type="submit" className="btn-primary w-full">
            Send message
            <span className="material-symbols-outlined text-base">send</span>
          </button>
          {submitted && (
            <p className="text-sm text-[var(--color-brand)] text-center" role="status">
              Opening your email client. Thank you for reaching out.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
