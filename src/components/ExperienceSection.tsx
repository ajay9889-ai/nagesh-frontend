import React from 'react';
import { TIMELINE, CERTIFICATIONS } from '@/data/portfolioData';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

export function ExperienceSection() {
  const experiences = TIMELINE.filter((item) => item.type === 'experience');
  const education = TIMELINE.filter((item) => item.type === 'education');

  return (
    <section id="experience" className="py-14 sm:py-20 px-6 sm:px-10 max-w-7xl mx-auto hairline-b">
      <div className="mb-12">
        <span className="text-xs uppercase tracking-widest text-muted font-mono mb-3 block">
          journey
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.04em] text-ink">
          Experience & education.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
        {/* Left Column: Professional Experience */}
        <div>
          <div className="flex items-center gap-2 mb-8 pb-3 hairline-b">
            <Briefcase className="w-5 h-5 text-accent" />
            <h3 className="font-display text-xl font-bold text-ink">
              Work Experience
            </h3>
          </div>

          <div className="relative pl-6 border-l border-line space-y-12">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-bg transition-transform group-hover:scale-125" />

                <div className="space-y-1.5 mb-3">
                  <h4 className="font-display text-lg font-bold text-ink">
                    {exp.role}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-mono text-muted flex-wrap">
                    <span className="text-accent font-semibold">{exp.organization}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.06] border border-line text-ink">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {exp.highlights && (
                  <ul className="space-y-2 text-sm text-muted leading-relaxed">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="list-disc list-outside ml-4">
                        {h}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-accent/[0.06] border border-accent/20 text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Certifications */}
        <div className="space-y-14">
          <div>
            <div className="flex items-center gap-2 mb-8 pb-3 hairline-b">
              <GraduationCap className="w-5 h-5 text-accent" />
              <h3 className="font-display text-xl font-bold text-ink">
                Education
              </h3>
            </div>

            <div className="relative pl-6 border-l border-line space-y-10">
              {education.map((edu) => (
                <div key={edu.id} className="relative group">
                  <span className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-line group-hover:bg-accent transition-colors duration-200" />

                  <div className="space-y-1 mb-2">
                    <h4 className="font-display text-lg font-bold text-ink">
                      {edu.role}
                    </h4>
                    <div className="flex items-center gap-2 text-xs font-mono text-muted flex-wrap">
                      <span className="text-ink font-medium">{edu.organization}</span>
                      <span>•</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {edu.highlights && (
                    <ul className="space-y-1.5 text-sm text-muted leading-relaxed">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="list-disc list-outside ml-4">
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Training */}
          <div>
            <div className="flex items-center gap-2 mb-6 pb-3 hairline-b">
              <Award className="w-5 h-5 text-accent" />
              <h3 className="font-display text-xl font-bold text-ink">
                Certifications & Training
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.title}
                  className="p-4 rounded-xl border border-line bg-bg/40 backdrop-blur-sm space-y-1 hover:border-accent/40 transition-colors"
                >
                  <span className="text-[10px] uppercase font-mono tracking-wider text-accent block">
                    {cert.badge}
                  </span>
                  <h4 className="font-display text-sm font-bold text-ink leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-mono text-muted">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
