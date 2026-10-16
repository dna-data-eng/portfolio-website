"use client";

import React, { useState, useEffect } from "react";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "tools", label: "Tools" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "about",
        "skills",
        "tools",
        "projects",
        "pipeline",
        "experience",
        "certifications",
        "contact",
      ];
      let current = "hero";
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop) {
          current = section === "pipeline" ? "projects" : section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="nav-shell fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center px-gutter py-3.5 max-w-container-max mx-auto">
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="material-symbols-outlined text-[var(--color-brand)]">database</span>
          <span className="font-mono-ui text-sm font-semibold tracking-wide text-[var(--color-fg-primary)] group-hover:text-[var(--color-brand-hover)] transition-colors">
            DAN.DBA
          </span>
        </a>

        <div className="hidden lg:flex gap-1 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`px-3 py-2 text-[13px] font-medium rounded-md transition-colors ${
                activeSection === link.id
                  ? "text-[var(--color-brand)] bg-[var(--color-brand-subtle)]"
                  : "text-[var(--color-fg-muted)] hover:text-[var(--color-fg-primary)] hover:bg-[var(--color-surface)]"
              }`}
              href={`#${link.id}`}
            >
              {link.label}
            </a>
          ))}
          <a className="btn-primary ml-3 !py-2 !px-4 text-[13px]" href="#contact">
            Contact me
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-md text-[var(--color-fg-primary)] hover:bg-[var(--color-surface)] transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? "close" : "menu"}</span>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--color-stroke-subtle)] bg-[var(--color-canvas-subtle)] flex flex-col py-2 px-gutter gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`text-sm font-medium py-2.5 px-3 rounded-md ${
                activeSection === link.id
                  ? "text-[var(--color-brand)] bg-[var(--color-brand-subtle)]"
                  : "text-[var(--color-fg-muted)]"
              }`}
              href={`#${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
