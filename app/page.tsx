"use client";

import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      });
    }, observerOptions);

    const divs = document.querySelectorAll("section > div");
    divs.forEach((el) => {
      el.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-10");
      observer.observe(el);
    });

    return () => {
      divs.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <DotGrid />
      <Navbar />
      <main className="relative z-10 pt-24">
        <Hero onOpenModal={openModal} />
        <About />
        <PipelineShowcase />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <footer className="w-full py-section-gap bg-[#0a0a0a] border-t border-[#1f1f1f]">
        <div className="flex flex-col items-center gap-4 w-full px-gutter max-w-container-max mx-auto">
          <div className="flex gap-8 flex-wrap justify-center">
            <a className="text-[#888888] hover:text-[#00ff88] transition-colors font-label-sm text-label-sm" href="#about">
              About
            </a>
            <a className="text-[#888888] hover:text-[#00ff88] transition-colors font-label-sm text-label-sm" href="#pipeline">
              Pipeline
            </a>
            <a className="text-[#888888] hover:text-[#00ff88] transition-colors font-label-sm text-label-sm" href="#projects">
              Projects
            </a>
            <a className="text-[#888888] hover:text-[#00ff88] transition-colors font-label-sm text-label-sm" href="#skills">
              Skills
            </a>
            <a className="text-[#888888] hover:text-[#00ff88] transition-colors font-label-sm text-label-sm" href="#contact">
              Contact
            </a>
          </div>
          <p className="text-[#888888] font-code-md text-label-sm opacity-80">
            {"// DNA — Dan Nyarkoh Andoh · Data Engineer — Accra, Ghana 🇬🇭"}
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
