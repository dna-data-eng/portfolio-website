import React from "react";

export default function Contact() {
  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="contact">
      <div className="text-center max-w-2xl mx-auto border-t border-[#1f1f1f] pt-section-gap">
        <h2 className="font-headline-lg text-headline-xl text-[#e3e2e2] mb-4">Get In Touch</h2>
        <p className="text-[#888888] mb-10 leading-relaxed">
          Available for freelance opportunities and technical consultations. Let&apos;s build something scalable.
        </p>

        <div className="flex justify-center gap-8 items-center mb-16">
          {/* Email */}
          <a className="group flex flex-col items-center gap-2" href="mailto:contact@dataengineer.dev">
            <div className="w-16 h-16 border border-[#1f1f1f] flex items-center justify-center text-[#00ff88] group-hover:bg-[#00ff88] group-hover:text-[#00210c] transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">mail</span>
            </div>
            <span className="font-label-sm text-[#888888] group-hover:text-[#00ff88] transition-colors">
              EMAIL
            </span>
          </a>

          {/* Linkedin */}
          <a className="group flex flex-col items-center gap-2" href="#">
            <div className="w-16 h-16 border border-[#1f1f1f] flex items-center justify-center text-[#00ff88] group-hover:bg-[#00ff88] group-hover:text-[#00210c] transition-all duration-300">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                account_circle
              </span>
            </div>
            <span className="font-label-sm text-[#888888] group-hover:text-[#00ff88] transition-colors">
              LINKEDIN
            </span>
          </a>

          {/* Github */}
          <a className="group flex flex-col items-center gap-2" href="#">
            <div className="w-16 h-16 border border-[#1f1f1f] flex items-center justify-center text-[#00ff88] group-hover:bg-[#00ff88] group-hover:text-[#00210c] transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">code</span>
            </div>
            <span className="font-label-sm text-[#888888] group-hover:text-[#00ff88] transition-colors">
              GITHUB
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
