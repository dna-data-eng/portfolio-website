"use client";
import React from "react";

interface PDFViewerProps {
  fileUrl: string;
}

export default function PDFViewerClient({ fileUrl }: PDFViewerProps) {
  if (!fileUrl) {
    return (
      <div className="text-secondary font-code-md text-xs py-8 text-center">
        Document URL not found.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      <iframe
        src={fileUrl}
        className="w-full border border-[#1f1f1f]"
        style={{ height: "65vh", background: "#0a0a0a" }}
        title="PDF Viewer"
      />
    </div>
  );
}