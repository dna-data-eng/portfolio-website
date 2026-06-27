"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "pipeline", "projects", "skills", "contact"];
      // Offsets and heights tracking
      let current = "hero";
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: "HERO" },
    { id: "pipeline", label: "PIPELINE" },
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#3b4b3d]">
      <nav className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00ff88]" data-icon="terminal">
            terminal
          </span>
          <span className="font-metric-lg text-metric-lg font-bold text-[#00ff88] tracking-tighter">
            DATA_ENGINEER
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`transition-colors font-label-sm text-label-sm ${
                activeSection === link.id
                  ? "text-[#00ff88] border-b-2 border-[#00ff88] pb-1"
                  : "text-[#888888] hover:text-[#00ff88]"
              }`}
              href={`#${link.id}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button
          className="md:hidden text-[#00ff88] p-2 active:scale-95 transition-transform"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? "close" : "menu"}</span>
        </button>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#1f1f1f] flex flex-col py-4 px-gutter gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`font-label-sm text-label-sm py-2 block ${
                activeSection === link.id ? "text-[#00ff88]" : "text-[#888888]"
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
