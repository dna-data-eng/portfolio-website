"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PipelineShowcase from "@/components/PipelineShowcase";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
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
    { href: "#pipeline", label: "Pipeline" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <DotGrid />
      <Navbar />
      <main className="relative z-10 pt-20">
        <Hero onOpenModal={openModal} />
        <About />
        <PipelineShowcase />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="w-full py-12 border-t border-[var(--color-stroke-subtle)] bg-[var(--color-canvas-subtle)]">
        <div className="flex flex-col items-center gap-5 w-full px-gutter max-w-container-max mx-auto">
          <nav className="flex gap-6 flex-wrap justify-center" aria-label="Footer">
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
          <p className="text-sm text-[var(--color-fg-secondary)] text-center">
            Dan Nyarkoh Andoh · Data Engineer · Accra, Ghana 🇬🇭
          </p>
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
