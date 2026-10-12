'use client';

import React from 'react';
import { 
  Server, 
  Cpu, 
  Layers, 
  Terminal, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  GitBranch, 
  Rocket, 
  GraduationCap, 
  Code2,
  Workflow
} from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 px-6 sm:px-10 max-w-7xl mx-auto hairline-b relative min-h-screen flex flex-col justify-center">
      {/* Background ambient decorative glow */}
      <div 
        aria-hidden="true"
        className="absolute top-1/3 right-10 w-[500px] h-[300px] bg-gradient-to-br from-accent/10 via-rose-500/5 to-transparent blur-[120px] pointer-events-none rounded-full" 
      />

      {/* Section Header */}
      <div className="mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="tracking-wide uppercase text-[11px]">Engineering Philosophy & Stack</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.04em] text-ink leading-[1.05]">
          Architecting systems with depth.
        </h2>

        <p className="mt-3 text-sm sm:text-base text-muted max-w-3xl leading-relaxed">
          Full-stack software engineer with hands-on production experience designing <strong className="text-ink font-semibold">Node.js backend architectures</strong>, RESTful microservices, and <strong className="text-ink font-semibold">production Agentic AI & RAG workflows</strong> that solve real-world problems.
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
        
        {/* Bento Box 1: Large Node.js Backend Card (Col 8) */}
        <div className="md:col-span-12 lg:col-span-8 group relative rounded-3xl backdrop-blur-xl bg-white/75 dark:bg-[#121218]/80 border border-black/[0.06] dark:border-white/10 p-6 sm:p-8 shadow-sm hover:border-accent/40 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase font-mono tracking-widest text-emerald-600 dark:text-emerald-400 block font-semibold">
                    Core Specialization
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                    Production Node.js Backend & Scalable APIs
                  </h3>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/10 text-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                <span>REST & Microservices</span>
              </span>
            </div>

            <p className="text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
              Deep backend ownership across <strong className="text-ink font-medium">Node.js & Express.js</strong>. Architecting scalable REST API contracts, structured data models, JWT authentication, Redis caching layers, and asynchronous task execution to guarantee reliable performance under high concurrent loads.
            </p>

            {/* Simulated Live API Request Pipeline Visual */}
            <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-black/[0.03] dark:bg-black/40 border border-black/[0.06] dark:border-white/10 font-mono text-xs space-y-3">
              <div className="flex items-center justify-between text-muted text-[11px] pb-2 border-b border-black/[0.06] dark:border-white/10">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-accent" />
                  <span>Node.js Request Pipeline</span>
                </span>
                <span className="text-emerald-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>sub-15ms route execution</span>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-[11px]">
                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-white/[0.05] border border-line flex flex-col justify-between">
                  <span className="text-muted text-[10px]">01 / Ingestion</span>
                  <span className="font-semibold text-ink">Express Router</span>
                  <span className="text-accent text-[10px]">CORS + Helmet</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-white/[0.05] border border-line flex flex-col justify-between">
                  <span className="text-muted text-[10px]">02 / Guard Layer</span>
                  <span className="font-semibold text-ink">JWT Auth & Limiter</span>
                  <span className="text-accent text-[10px]">Per-IP Throttling</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-white/[0.05] border border-line flex flex-col justify-between">
                  <span className="text-muted text-[10px]">03 / Memory Layer</span>
                  <span className="font-semibold text-ink">Redis Cache</span>
                  <span className="text-accent text-[10px]">Fast Key Invalidation</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-white/[0.05] border border-line flex flex-col justify-between">
                  <span className="text-muted text-[10px]">04 / Persistence</span>
                  <span className="font-semibold text-ink">PostgreSQL / Mongo</span>
                  <span className="text-accent text-[10px]">Indexed Queries</span>
                </div>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'PostgreSQL', 'Redis', 'JWT / RBAC', 'Docker', 'AWS'].map((tag) => (
                <span 
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-black/[0.04] dark:bg-white/[0.05] border border-line text-muted hover:text-ink transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Box 2: Agentic AI & RAG (Col 4) */}
        <div className="md:col-span-12 lg:col-span-4 group relative rounded-3xl backdrop-blur-xl bg-white/75 dark:bg-[#121218]/80 border border-black/[0.06] dark:border-white/10 p-7 sm:p-9 shadow-sm hover:border-accent/40 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                <Workflow className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] uppercase font-mono tracking-widest text-purple-600 dark:text-purple-400 block font-semibold">
                  Generative AI
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                  Agentic AI & RAG
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Engineering multi-agent reasoning workflows with <strong className="text-ink font-medium">LangGraph</strong> tool-calling agents. Pairing dense ChromaDB vector search with BM25 and Reciprocal Rank Fusion (RRF) for cited responses.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="p-3 rounded-xl bg-purple-500/[0.06] border border-purple-500/20 text-xs font-mono space-y-1">
                <span className="text-purple-500 font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  LangGraph StateGraph
                </span>
                <p className="text-[11px] text-muted leading-tight">
                  8 tool-calling agents with circuit breakers & Postgres durable checkpoints.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-accent/[0.06] border border-accent/20 text-xs font-mono space-y-1">
                <span className="text-accent font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Hybrid Retrieval Core
                </span>
                <p className="text-[11px] text-muted leading-tight">
                  Dense embeddings + sparse BM25 fused via Reciprocal Rank Fusion.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-1.5">
            {['LangGraph', 'RAG', 'ChromaDB', 'BM25', 'RRF Re-ranking'].map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-mono bg-black/[0.03] dark:bg-white/[0.04] border border-line text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bento Box 3: Founding Team Ownership (Col 4) */}
        <div className="md:col-span-12 sm:col-span-6 lg:col-span-4 group relative rounded-3xl backdrop-blur-xl bg-white/75 dark:bg-[#121218]/80 border border-black/[0.06] dark:border-white/10 p-6 sm:p-7 shadow-sm hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Rocket className="w-4 h-4" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-accent/10 text-accent font-semibold border border-accent/20">
                Core Founding Team
              </span>
            </div>

            <h3 className="font-display text-lg font-bold text-ink">
              Brikup Technologies
            </h3>

            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Designed and shipped a production Flutter application paired with a Node.js/Express backend. Owned database schemas, auth, and automated AWS CloudFront deployments.
            </p>
          </div>

          <div className="pt-4 text-[11px] font-mono text-muted flex items-center gap-2 border-t border-line/60">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Feb 2026 – Jul 2026 • Bangalore</span>
          </div>
        </div>

        {/* Bento Box 4: Transformer From Scratch (Col 4) */}
        <div className="md:col-span-12 sm:col-span-6 lg:col-span-4 group relative rounded-3xl backdrop-blur-xl bg-white/75 dark:bg-[#121218]/80 border border-black/[0.06] dark:border-white/10 p-6 sm:p-7 shadow-sm hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-500/10 text-blue-500 font-semibold border border-blue-500/20">
                Pure PyTorch
              </span>
            </div>

            <h3 className="font-display text-lg font-bold text-ink">
              Transformers From Scratch
            </h3>

            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Implemented a GPT decoder-only Transformer from mathematical first principles in PyTorch — masked self-attention, positional encoding, and custom training loops.
            </p>
          </div>

          <div className="pt-4 flex items-center gap-2 text-[11px] font-mono text-muted border-t border-line/60">
            <GitBranch className="w-3.5 h-3.5 text-accent" />
            <span>Mathematical Rigor & Verification</span>
          </div>
        </div>

        {/* Bento Box 5: Academic & Execution Track Record (Col 4) */}
        <div className="md:col-span-12 lg:col-span-4 group relative rounded-3xl backdrop-blur-xl bg-white/75 dark:bg-[#121218]/80 border border-black/[0.06] dark:border-white/10 p-6 sm:p-7 shadow-sm hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-9 h-9 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-500/20">
                High Distinction
              </span>
            </div>

            <h3 className="font-display text-lg font-bold text-ink">
              Academic Excellence
            </h3>

            <div className="grid grid-cols-2 gap-3 py-1">
              <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-line">
                <span className="text-[10px] font-mono text-muted block">MCA (BMSIT)</span>
                <span className="font-display text-xl font-bold text-ink">9.18<span className="text-xs font-mono text-accent">/10</span></span>
              </div>
              <div className="p-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.04] border border-line">
                <span className="text-[10px] font-mono text-muted block">B.Sc. (UCS)</span>
                <span className="font-display text-xl font-bold text-ink">8.61<span className="text-xs font-mono text-accent">/10</span></span>
              </div>
            </div>

            <p className="text-[11px] text-muted leading-tight">
              Fast learner who converts unfamiliar concepts into resilient, working systems under rapid cycles.
            </p>
          </div>

          <div className="pt-3 flex items-center gap-1.5 text-[11px] font-mono text-accent border-t border-line/60">
            <Code2 className="w-3.5 h-3.5" />
            <span>4+ Production Systems Deployed</span>
          </div>
        </div>

      </div>
    </section>
  );
}
