import type { NavSectionId } from '@/app/config/site';

export type Locale = 'pt' | 'en';

/** Trecho de texto que pode receber destaque na cor de acento. */
export type Segment = {
    text: string;
    accent?: boolean;
};

export type TimelineEntry = {
    date: string;
    role: string;
    bullets: string[];
};

export type Dictionary = {
    nav: Record<NavSectionId, string>;
    header: {
        resume: string;
        resumeShort: string;
        languageLabel: string;
        openMenu: string;
        menuTitle: string;
    };
    hero: {
        greeting: string;
        name: string;
        lead: string;
        linkedin: string;
        github: string;
        scrollDown: string;
    };
    about: {
        title: string;
        paragraphs: Segment[][];
    };
    skills: {
        title: string;
        subtitle: string;
    };
    projects: {
        title: string;
        placeholder: string;
        previous: string;
        next: string;
        goToPage: string;
    };
    experience: {
        title: string;
        items: TimelineEntry[];
    };
};
