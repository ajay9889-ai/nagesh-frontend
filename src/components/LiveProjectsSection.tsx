'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Github, 
  Globe, 
  Sparkles, 
  Lock, 
  Check, 
  Copy, 
  Layers,
  Activity,
  Maximize2
} from 'lucide-react';
import { LIVE_PROJECTS } from '@/data/portfolioData';
import { ProjectReactions } from '@/components/ProjectReactions';

export function LiveProjectsSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyLink = (id: string, url?: string) => {
    if (!url) return;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="live-projects" className="py-8 sm:py-12 px-6 sm:px-10 max-w-7xl mx-auto hairline-b relative min-h-[calc(100dvh-4rem)] lg:h-[calc(100dvh-4rem)] flex flex-col justify-center">
      {/* Background ambient decorative glow */}
      <div 
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-accent/10 via-blue-500/5 to-transparent blur-[120px] pointer-events-none rounded-full" 
      />

      {/* Section Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-7 gap-3">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium mb-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="tracking-wide uppercase text-[10px]">Production Deployments</span>
          </div>

          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-[-0.04em] text-ink">
            Live Projects.
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-muted max-w-md leading-relaxed">
          Interactive full-stack applications and models actively deployed in the cloud. Launch live demos or explore technical case studies.
        </p>
      </div>

      {/* Balanced 2x2 Grid (Fits screen, all 4 cards visible without scroll) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {LIVE_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between rounded-2xl backdrop-blur-2xl bg-white/75 dark:bg-[#121218]/85 border border-black/[0.08] dark:border-white/10 shadow-[0_4px_20px_0_rgba(0,0,0,0.04)] dark:shadow-[0_4px_20px_0_rgba(0,0,0,0.25)] hover:border-accent/40 dark:hover:border-accent/40 hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            {/* Top Browser Chrome Bar */}
            <div className="px-3.5 py-1.5 bg-black/[0.03] dark:bg-white/[0.03] border-b border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between gap-2">
              {/* macOS Dots */}
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
              </div>

              {/* Simulated Address Pill */}
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/[0.04] dark:bg-black/35 border border-black/[0.06] dark:border-white/5 text-[10px] font-mono text-muted truncate max-w-[200px]">
                <Lock className="w-2.5 h-2.5 text-emerald-500 shrink-0" />
                <span className="truncate">{project.displayUrl || 'https://live-app.vercel.app'}</span>
              </div>

              {/* Copy URL Button */}
              {project.liveUrl && (
                <button
                  type="button"
                  onClick={() => handleCopyLink(project.id, project.liveUrl)}
                  title="Copy live URL"
                  className="p-1 rounded-md text-muted hover:text-ink hover:bg-black/5 dark:hover:bg-white/10 transition-colors shrink-0"
                >
                  {copiedId === project.id ? (
                    <Check className="w-3 h-3 text-emerald-500" />
                  ) : (
                    <Copy className="w-3 h-3" />
                  )}
                </button>
              )}
            </div>

            {/* Card Content Area */}
            <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                {/* Meta row: Category + LIVE + Badge */}
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-muted">
                      {project.category}
                    </span>
                    {project.status === 'live' && (
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 text-[9px] font-mono font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        LIVE
                      </span>
                    )}
                  </div>

                  {project.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded-lg bg-accent/10 text-accent border border-accent/25 font-medium shrink-0">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title & Metric Row */}
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg sm:text-xl font-bold tracking-tight text-ink group-hover:text-accent transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.featuredMetric && (
                    <span className="text-[10px] font-mono text-muted bg-black/[0.03] dark:bg-white/[0.04] px-2 py-0.5 rounded border border-line/60 shrink-0">
                      <strong className="text-ink font-semibold">{project.featuredMetric.value}</strong>
                    </span>
                  )}
                </div>

                <p className="text-xs text-muted leading-relaxed line-clamp-2 mt-1">
                  {project.tagline}
                </p>
              </div>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.05] dark:border-white/5 text-muted"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-1.5 py-0.5 text-[10px] font-mono text-muted/60">
                    +{project.technologies.length - 5}
                  </span>
                )}
              </div>

              {/* Bottom Actions Bar */}
              <div className="pt-2 border-t border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between gap-3">
                {/* Live reactions */}
                <div className="flex items-center gap-1">
                  <ProjectReactions slug={project.slug} compact />
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-white bg-accent hover:bg-blue-700 active:scale-[0.98] transition-all shadow-sm"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      className="p-1.5 rounded-xl border border-line/80 dark:border-white/10 hover:border-accent hover:text-accent text-muted transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
