"use client";

import React, { useState, useEffect } from "react";

const TYPEWRITER_LINES = [
  "connecting to dna.engineer...",
  "PING dna.engineer: 0ms latency",
  "connection established ✓",
  "> ready for collaboration",
];

export default function Contact() {
  const [lineIndex, setLineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const currentLine = TYPEWRITER_LINES[lineIndex];

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }

    const pauseTimeout = setTimeout(() => {
      setCharIndex(0);
      setDisplayText("");
      setLineIndex((prev) => (prev + 1) % TYPEWRITER_LINES.length);
    }, 2000);

    return () => clearTimeout(pauseTimeout);
  }, [lineIndex, charIndex]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:ynyarkoh1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="contact">
      <div className="mb-12">
        <h2 className="font-headline-lg text-headline-lg text-[#e3e2e2] mb-2">Contact</h2>
        <p className="text-[#e3e2e2]">Let&apos;s connect and build something together.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-[#111111] border border-[#1f1f1f] overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1f1f1f] bg-[#0d0e0f]">
              <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
              <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
            </div>
            <div className="p-6 font-code-md text-sm space-y-3">
              <p className="text-[#00ff88] min-h-[1.25rem]">
                {displayText}
                <span className="animate-pulse">▊</span>
              </p>
              <div className="text-[#e3e2e2] text-sm space-y-2 pt-4 border-t border-[#1f1f1f]">
                <p>
                  STATUS: <span className="text-[#00ff88]">OPEN TO OPPORTUNITIES</span>
                </p>
                <p>LOCATION: Accra, Ghana 🇬🇭</p>
                <p>TARGET: Germany / Switzerland</p>
                <p>FOCUS: Data Engineering</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/dna-data-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-[#1f1f1f] flex items-center justify-center text-[#00ff88] hover:bg-[#00ff88] hover:text-[#00210c] transition-all"
              title="GitHub"
            >
              <span className="material-symbols-outlined text-xl">code</span>
            </a>
            <a
              href="https://www.linkedin.com/in/dan-nyarkoh-andoh-313a383b2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 border border-[#1f1f1f] flex items-center justify-center text-[#00ff88] hover:bg-[#00ff88] hover:text-[#00210c] transition-all"
              title="LinkedIn"
            >
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                account_circle
              </span>
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-label-sm text-label-sm text-[#e3e2e2] mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#111111] border border-[#1f1f1f] text-[#e3e2e2] px-4 py-3 font-code-md text-sm focus:border-[#00ff88] focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block font-label-sm text-label-sm text-[#e3e2e2] mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#111111] border border-[#1f1f1f] text-[#e3e2e2] px-4 py-3 font-code-md text-sm focus:border-[#00ff88] focus:outline-none transition-colors"
            />
          </div>
          <div>
            <label htmlFor="message" className="block font-label-sm text-label-sm text-[#e3e2e2] mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-[#111111] border border-[#1f1f1f] text-[#e3e2e2] px-4 py-3 font-code-md text-sm focus:border-[#00ff88] focus:outline-none transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00ff88] text-[#00210c] font-metric-lg text-sm py-4 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] active:scale-95 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
