import type { Dictionary } from '../types';

export const en: Dictionary = {
    nav: {
        about: 'about',
        skills: 'skills',
        projects: 'projects',
        experience: 'experience',
        contact: 'contact',
    },
    header: {
        resume: 'download my resume',
        resumeShort: 'resume',
        languageLabel: 'Select language',
        openMenu: 'Open navigation menu',
        menuTitle: 'Navigation',
    },
    hero: {
        greeting: "Hi, I'm ",
        name: 'Eduarda Saleth',
        lead: 'Web developer and Information Systems student since 2022. I like turning ideas into interfaces that are simple, beautiful and that actually work.',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        scrollDown: 'Go to the about section',
    },
    about: {
        title: 'about',
        paragraphs: [
            [
                { text: "I've been working with web development since 2022, " },
                { text: 'focused on front-end', accent: true },
                {
                    text: ' and interested in UI/UX. I like building simple, beautiful and functional interfaces, always thinking about the experience of whoever is going to use them.',
                },
            ],
            [
                {
                    text: "When I'm not coding, I'm probably gaming, reading, watching reality shows or listening to k-pop (especially NewJeans). Those passions ",
                },
                { text: 'shape', accent: true },
                {
                    text: ' a lot of my creative process. And yes, I am completely in love with animals — especially my dog ',
                },
                { text: 'Shuri', accent: true },
                { text: ' 🐶.' },
            ],
        ],
    },
    skills: {
        title: 'skills',
        subtitle: 'Technologies I currently use day to day as a developer.',
    },
    projects: {
        title: 'projects',
        placeholder: 'coming soon',
        previous: 'See previous projects',
        next: 'See next projects',
        goToPage: 'Go to page',
    },
    experience: {
        title: 'experience',
        items: [
            {
                date: 'may 2024 - present',
                role: 'Software Development Assistant | SYSDAM',
                bullets: [
                    'Development of a web system for dam monitoring',
                    'Front-end development with React.js',
                    'Component customization using Ant Design (AntD)',
                    'State management with Context API',
                    'Maps and geospatial visualization with Cesium',
                    'Back-end work with C#',
                ],
            },
            {
                date: 'june 2022 - may 2024',
                role: 'Software Development Intern | dti digital',
                bullets: [
                    'Web development for a banking system',
                    'Building interfaces with React.js and Material UI (MUI)',
                    'API integration using Axios and Redux',
                    'Automated testing with Cypress',
                    'Back-end work with C# (.NET 6)',
                    'Relational database handling (MySQL)',
                    'Agile methodology, task refinement and team ceremonies',
                ],
            },
        ],
    },
};
