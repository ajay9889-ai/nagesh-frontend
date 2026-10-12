/**
 * siteActions.ts
 * Client-side whitelist of tool actions.
 */

export type ActionName =
  | 'scroll_to'
  | 'open_project'
  | 'show_resume'
  | 'open_contact_form'
  | 'change_theme'
  | 'show_skills'
  | 'send_message_to_nagesh'
  | 'request_contact_message'
  | 'request_contact_details';

export interface ActionEvent {
  name: ActionName;
  args?: Record<string, unknown>;
}

/** Map section IDs used in the portfolio HTML */
const SECTION_ID_MAP: Record<string, string> = {
  hero: 'hero',
  about: 'about',
  skills: 'skills',
  work: 'work',
  projects: 'work',
  experience: 'experience',
  contact: 'contact',
  'live-projects': 'live-projects',
  'live projects': 'live-projects',
  'live': 'live-projects',
  'live demo': 'live-projects',
  'live demos': 'live-projects',
  'deployments': 'live-projects',
  'ai-business-analyst': 'work',
  'production-rag-system': 'work',
  'gpt-from-scratch': 'work',
  'startup-station': 'work',
};

/** Smooth-scroll to a named section */
function scrollTo(section: string): boolean {
  const key = (section ?? '').toLowerCase().trim();
  const id = SECTION_ID_MAP[key] ?? key;
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    el.style.transition = 'outline 0s, outline-offset 0s';
    el.style.outline = '2px solid var(--color-accent)';
    el.style.outlineOffset = '4px';
    setTimeout(() => {
      el.style.outline = '';
      el.style.outlineOffset = '';
    }, 1800);
    return true;
  }
  return false;
}

/** Open the contact section */
function openContactForm(): boolean {
  return scrollTo('contact');
}

/** Scroll to work section and attempt to highlight a project card */
function openProject(name: string): boolean {
  scrollTo('work');
  const normalized = (name ?? '').toLowerCase().replace(/\s+/g, '');
  setTimeout(() => {
    const candidates = document.querySelectorAll('[data-project], article, section');
    for (const el of Array.from(candidates)) {
      const label =
        (el.getAttribute('data-project') ?? el.textContent ?? '').toLowerCase().replace(/\s+/g, '');
      if (label.includes(normalized)) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        (el as HTMLElement).style.transition = 'box-shadow 0.3s';
        (el as HTMLElement).style.boxShadow = '0 0 0 2px var(--color-accent)';
        setTimeout(() => ((el as HTMLElement).style.boxShadow = ''), 2000);
        break;
      }
    }
  }, 600);
  return true;
}

/** Change the page colour theme */
function changeTheme(mode: string): boolean {
  const target = (mode ?? '').toLowerCase();
  if (target === 'dark' || target === 'light') {
    document.documentElement.setAttribute('data-theme', target);
    try {
      localStorage.setItem('portfolio-theme', target);
      localStorage.setItem('theme', target);
    } catch {}
    return true;
  }
  return false;
}

/** Show resume — opens contact section */
function showResume(): boolean {
  return scrollTo('contact');
}

/** Scroll to skills section */
function showSkills(_filter?: string): boolean {
  return scrollTo('skills');
}

export function executeSiteAction(event: ActionEvent): boolean {
  const { name, args = {} } = event;

  switch (name) {
    case 'scroll_to':
      return scrollTo(String(args.section ?? args.id ?? ''));
    case 'open_project':
      return openProject(String(args.name ?? args.project ?? ''));
    case 'show_resume':
      return showResume();
    case 'open_contact_form':
      return openContactForm();
    case 'change_theme':
      return changeTheme(String(args.mode ?? args.theme ?? ''));
    case 'show_skills':
      return showSkills(args.filter ? String(args.filter) : undefined);
    case 'send_message_to_nagesh':
    case 'request_contact_message':
    case 'request_contact_details':
      return true;
    default:
      console.warn('[SiteActions] Unknown action:', name);
      return false;
  }
}

export function isActionEvent(obj: unknown): obj is ActionEvent {
  if (typeof obj !== 'object' || obj === null) return false;
  const a = obj as Record<string, unknown>;
  return typeof a.name === 'string';
}
