"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "pipeline", "projects", "skills", "contact"];
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
    { id: "about", label: "About" },
    { id: "pipeline", label: "Pipeline" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#3b4b3d]">
      <nav className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        <a href="#hero" className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00ff88]" data-icon="terminal">
            terminal
          </span>
          <span className="font-metric-lg text-metric-lg font-bold tracking-tighter">
            <span className="text-[#00ff88]">D</span>
            <span className="text-[#e3e2e2]">N</span>
            <span className="text-[#00ff88]">A</span>
          </span>
        </a>

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`transition-colors font-label-sm text-label-sm ${
                activeSection === link.id
                  ? "text-[#00ff88] border-b-2 border-[#00ff88] pb-1"
                  : "text-[#c8c8c8] hover:text-[#00ff88]"
              }`}
              href={`#${link.id}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-[#00ff88] p-2 active:scale-95 transition-transform"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="material-symbols-outlined">{mobileMenuOpen ? "close" : "menu"}</span>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#1f1f1f] flex flex-col py-4 px-gutter gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`font-label-sm text-label-sm py-2 block ${
                activeSection === link.id ? "text-[#00ff88]" : "text-[#c8c8c8]"
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
