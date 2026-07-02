"use client";
import React, { useEffect } from "react";
import PDFViewerClient from "./PDFViewerClient";

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "cv" | "resume";
  fileUrl: string;
}

export default function DocumentModal({ isOpen, onClose, type, fileUrl }: DocumentModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  const handleDownload = async () => {
    if (!fileUrl) return;
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const objectUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = objectUrl;
      anchor.download = type === "cv" ? "CV.pdf" : "Resume.pdf";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      window.URL.revokeObjectURL(objectUrl);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  if (!isOpen) return null;

  const docTitle = type === "cv" ? "DATA_ENGINEER_CV.PDF" : "DATA_ENGINEER_RESUME.PDF";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="bg-[#111111] border border-[#1f1f1f] w-full max-w-4xl max-h-[85vh] flex flex-col relative">
        <button
          className="absolute -top-10 right-0 text-[#888888] hover:text-[var(--color-brand)] flex items-center gap-2 font-metric-lg text-xs tracking-widest"
          onClick={onClose}
        >
          CLOSE <span className="material-symbols-outlined text-sm">close</span>
        </button>
        <div className="p-4 border-b border-[#1f1f1f] flex justify-between items-center bg-[#0d0e0f]">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[var(--color-brand)]">picture_as_pdf</span>
            <span className="font-metric-lg text-sm text-[#e3e2e2]">{docTitle}</span>
          </div>
          <button
            onClick={handleDownload}
            className="p-2 hover:bg-[#1f2020] text-[#888888] hover:text-[var(--color-brand)] transition-colors"
          >
            <span className="material-symbols-outlined text-sm">download</span>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 bg-[#0a0a0a] flex flex-col items-center">
          <PDFViewerClient fileUrl={fileUrl} />
        </div>
      </div>
    </div>
  );
}