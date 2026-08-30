/** Âncoras das seções. Fonte única para o menu, o scroll e o atributo id. */
export const SECTION_IDS = {
    hero: 'hero',
    about: 'about',
    skills: 'skills',
    projects: 'projects',
    experience: 'experience',
    contact: 'contact',
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

/** Ordem em que as seções aparecem no menu. */
export const NAV_SECTION_IDS = [
    SECTION_IDS.about,
    SECTION_IDS.skills,
    SECTION_IDS.projects,
    SECTION_IDS.experience,
    SECTION_IDS.contact,
] as const;

export type NavSectionId = (typeof NAV_SECTION_IDS)[number];

export const SOCIAL_LINKS = {
    linkedin: 'https://www.linkedin.com/in/eduardasaleth/',
    github: 'https://github.com/dudasaleth',
} as const;

/** Arquivo servido pelo botão do header (precisa existir em /public). */
export const RESUME_PATH = '/curriculo.pdf';
