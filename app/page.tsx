"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import PipelineShowcase from "@/components/PipelineShowcase";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import DotGrid from "@/components/DotGrid";
import DocumentModal from "@/components/DocumentModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"cv" | "resume">("cv");
  const [fileUrl, setFileUrl] = useState("");

  const openModal = (type: "cv" | "resume", url: string) => {
    setModalType(type);
    setFileUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#tools", label: "Tools" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <DotGrid />
      <Navbar />
      <main className="relative z-10 pt-16">
        <Hero onOpenModal={openModal} />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <PipelineShowcase />
        <Experience />
        <Certifications />
        <Contact />
      </main>

      <footer className="w-full py-10 border-t border-[var(--color-stroke-subtle)] bg-[var(--color-canvas-subtle)]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 w-full px-gutter max-w-container-max mx-auto">
          <p className="text-sm text-[var(--color-fg-secondary)]">
            Dan Nyarkoh Andoh, Junior Database Administrator, Cape Coast, Ghana 🇬🇭
          </p>
          <nav className="flex gap-x-6 gap-y-2 flex-wrap" aria-label="Footer">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                className="text-sm text-[var(--color-fg-muted)] hover:text-[var(--color-brand)] transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </footer>

      <DocumentModal
        isOpen={modalOpen}
        onClose={closeModal}
        type={modalType}
        fileUrl={fileUrl}
      />
    </>
  );
}
