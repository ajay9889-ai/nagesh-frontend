import React from 'react';
import { PROFILE, ENGINEERING_STRENGTHS } from '@/data/portfolioData';
import { Cpu, Terminal, Zap } from 'lucide-react';

export function AboutSection() {
  const statementLines = [
    "Software engineer who ships",
    "PyTorch, LangGraph, and RAG,",
    "wires them to scalable backends,",
    "and turns complex AI into reality.",
  ];

  const icons = [Cpu, Terminal, Zap];

  return (
    <section id="about" className="py-14 sm:py-20 px-6 sm:px-10 max-w-7xl mx-auto hairline-b">
      <div className="max-w-4xl">
        <span className="text-xs uppercase tracking-widest text-muted font-mono mb-4 block">
          about
        </span>

        <h2 className="sr-only">About Statement</h2>

        <div className="space-y-2">
          {statementLines.map((line, idx) => (
            <p
              key={idx}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] text-ink leading-[0.95]"
            >
              {line}
            </p>
          ))}
        </div>

        <p className="mt-8 text-base sm:text-lg text-muted font-normal max-w-3xl leading-relaxed">
          {PROFILE.subtext}
        </p>

        <p className="mt-4 text-sm sm:text-base text-muted/80 font-normal max-w-3xl leading-relaxed">
          {PROFILE.aboutSupport}
        </p>
      </div>

      {/* Engineering Strengths Grid */}
      <div className="mt-14 pt-10 hairline-t grid grid-cols-1 md:grid-cols-3 gap-6">
        {ENGINEERING_STRENGTHS.map((strength, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={strength.title}
              className="p-6 rounded-2xl border border-line bg-bg/50 backdrop-blur-sm space-y-3 hover:border-accent/40 transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-ink">
                {strength.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                {strength.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
