"use client";

import React, { useState, useEffect } from "react";

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Delay slightly to trigger transition after render
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const competencies = [
    { name: "Python", value: 95 },
    { name: "SQL", value: 90 },
    { name: "Apache Airflow", value: 85 },
    { name: "AWS Infrastructure", value: 80 },
  ];

  return (
    <section className="px-gutter max-w-container-max mx-auto py-section-gap" id="skills">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left Grid */}
        <div className="flex-1">
          <h2 className="font-headline-lg text-headline-lg text-[#e3e2e2] mb-8">
            Technical Proficiency
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            <div>
              <h4 className="font-metric-lg text-[#00ff88] text-sm mb-4 border-b border-[#3b4b3d] pb-2 uppercase">
                Languages
              </h4>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="text-[#e3e2e2]">Python</span>
                  <span className="text-xs text-[#888888]">ETL & Automation</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[#e3e2e2]">SQL</span>
                  <span className="text-xs text-[#888888]">Advanced Modeling</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[#e3e2e2]">Go</span>
                  <span className="text-xs text-[#888888]">Performance Tooling</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-metric-lg text-[#00ff88] text-sm mb-4 border-b border-[#3b4b3d] pb-2 uppercase">
                Data Tools
              </h4>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="text-[#e3e2e2]">Apache Spark</span>
                  <span className="text-xs text-[#888888]">Big Data Compute</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[#e3e2e2]">Airflow</span>
                  <span className="text-xs text-[#888888]">Orchestration</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[#e3e2e2]">dbt</span>
                  <span className="text-xs text-[#888888]">Transformation Layer</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-metric-lg text-[#00ff88] text-sm mb-4 border-b border-[#3b4b3d] pb-2 uppercase">
                Infrastructure
              </h4>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="text-[#e3e2e2]">AWS</span>
                  <span className="text-xs text-[#888888]">S3, Lambda, Glue</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[#e3e2e2]">Terraform</span>
                  <span className="text-xs text-[#888888]">IaC Pipelines</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[#e3e2e2]">Docker</span>
                  <span className="text-xs text-[#888888]">Containerization</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-metric-lg text-[#00ff88] text-sm mb-4 border-b border-[#3b4b3d] pb-2 uppercase">
                Frontend
              </h4>
              <ul className="space-y-3">
                <li className="flex flex-col">
                  <span className="text-[#e3e2e2]">Tailwind CSS</span>
                  <span className="text-xs text-[#888888]">Modern UI</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[#e3e2e2]">Next.js</span>
                  <span className="text-xs text-[#888888]">Dashboard Framework</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[#e3e2e2]">Supabase</span>
                  <span className="text-xs text-[#888888]">Real-time Backend</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Card (Competency Matrix) */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="bg-[#111111] border border-[#1f1f1f] p-8 hover:border-[#00ff88] transition-colors duration-300">
            <h4 className="font-metric-lg text-[#888888] text-xs mb-8 uppercase tracking-[0.2em]">
              Competency Matrix
            </h4>
            <div className="space-y-6">
              {competencies.map((comp, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between font-label-sm text-[#888888]">
                    <span>{comp.name}</span>
                    <span>{comp.value}%</span>
                  </div>
                  <div className="w-full bg-[#1f1f1f] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-[#00ff88] h-full transition-all duration-1000 ease-out"
                      style={{ width: animate ? `${comp.value}%` : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
