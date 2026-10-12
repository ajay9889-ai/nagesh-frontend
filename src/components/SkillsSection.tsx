import React from 'react';
import { SKILL_GROUPS } from '@/data/portfolioData';

export function SkillsSection() {
  return (
    <section id="skills" className="py-12 sm:py-16 px-6 sm:px-10 max-w-7xl mx-auto hairline-b min-h-screen flex flex-col justify-center">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest text-muted font-mono mb-3 block">
          capabilities
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.04em] text-ink">
          Core competencies.
        </h2>
        <p className="mt-2 text-sm sm:text-base text-muted max-w-2xl">
          Spanning production AI & ML pipelines, agentic reasoning, vector search, robust backend microservices, and modern UI engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILL_GROUPS.map((group) => (
          <div 
            key={group.name} 
            className="p-6 rounded-2xl border border-line bg-bg/50 backdrop-blur-sm space-y-4 hover:border-accent/40 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center justify-between pb-3 hairline-b">
              <h3 className="font-display text-lg font-bold text-ink">
                {group.name}
              </h3>
              <span className="text-[11px] font-mono text-muted/70">
                {group.items.length} skills
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-black/[0.03] dark:bg-white/[0.04] border border-line text-muted hover:text-ink hover:border-accent/50 hover:bg-accent/[0.04] transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
