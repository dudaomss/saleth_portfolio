import type { Locale } from '@/app/i18n/types';

export const SECTION_IDS = {
    hero: 'hero',
    about: 'about',
    skills: 'skills',
    projects: 'projects',
    experience: 'experience',
    contact: 'contact',
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const NAV_SECTION_IDS = [
    SECTION_IDS.about,
    SECTION_IDS.projects,
    SECTION_IDS.experience,
    SECTION_IDS.skills,
    SECTION_IDS.contact,
] as const;

export type NavSectionId = (typeof NAV_SECTION_IDS)[number];

export const SOCIAL_LINKS = [
    {
        id: 'linkedin',
        url: 'https://www.linkedin.com/in/eduarda-saleth-3a175621a/',
    },
    { id: 'github', url: 'https://github.com/dudaomss' },
] as const;

export type SocialId = (typeof SOCIAL_LINKS)[number]['id'];

export const SOURCE_REPO_URL = 'https://github.com/dudaomss/saleth_portfolio';

export const CONTACT_EMAIL = 'eduardasaleth@gmail.com';

export const RESUME_PATH: Record<Locale, string> = {
    pt: '/Eduarda_Saleth_Curriculo.pdf',
    en: '/Eduarda_Saleth_Resume.pdf',
};
