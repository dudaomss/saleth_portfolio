import type { Dictionary } from '../types';

export const en: Dictionary = {
    backToTop: 'Back to top',
    social: { linkedin: 'LinkedIn', github: 'GitHub' },
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
        navLabel: 'Main navigation',
    },
    hero: {
        greeting: "Hi, I'm ",
        name: 'Eduarda Saleth',
        lead: 'Full Stack Developer with over 4 years of experience in web applications. Experienced with React, Next.js, TypeScript, C#/.NET, REST APIs and geospatial data visualization.',
        scrollDown: 'Go to the about section',
    },
    about: {
        title: 'about',
        paragraphs: [
            [
                { text: "I'm a " },
                { text: 'Full Stack Developer', accent: true },
                {
                    text: ' with over 4 years of experience building web solutions. Along the way I have worked on projects in the banking and travel sectors and, currently, on dam monitoring systems.',
                },
            ],
            [
                { text: 'My experience is mostly with ' },
                { text: 'React.js, Next.js, TypeScript and C# (.NET)', accent: true },
                {
                    text: ', along with REST API integration, interface building, data visualization and geospatial applications. I also use tools like ',
                },
                { text: 'Claude and Cursor', accent: true },
                {
                    text: ' day to day to support development and make deliveries faster.',
                },
            ],
            [
                {
                    text: "When I'm not coding, I'm probably gaming, reading, watching some reality show or listening to music — mostly NewJeans. I'm also the mom of a beautiful caramel dog named ",
                },
                { text: 'Shuri', accent: true },
                { text: '. 🐶' },
            ],
        ],
    },
    skills: {
        title: 'skills',
        subtitle: 'Technologies I currently use day to day as a developer.',
        groups: {
            languages: 'languages',
            frontend: 'front-end',
            backend: 'back-end & data',
            tools: 'tools',
            spokenLanguages: 'spoken languages',
        },
        spokenLanguages: ['Portuguese (native)', 'English (intermediate)'],
    },
    projects: {
        title: 'projects',
        subtitle: 'Things I built from design to deploy.',
        stacksLabel: 'stacks',
        liveLabel: 'live demo',
        repoLabel: 'code',
        previous: 'Previous project',
        next: 'Next project',
        goToProject: 'Go to project',
        items: {
            'random-cine': {
                description:
                    'A movie and series randomizer for people who are tired of choosing. You set the type, the category and the platforms you subscribe to, and the app returns a random title with data from the TMDB API.',
            },
            'melhores-do-ano': {
                description:
                    'A platform for creating award-style polls among friends, like "who is the latest person of the year". Everyone signs in and votes on the categories, and once the closing date arrives the system builds a presentation announcing the winners — ready for the end-of-year party or any other occasion.',
            },
            'awards-ballot': {
                description:
                    'An interactive ballot for betting on who takes the statue at the main film, music and television award shows. After picking a favorite in each category, the app generates a personalized template with your picks to save and share.',
            },
        },
    },
    experience: {
        title: 'experience',
        subtitle: 'Where I have worked and what I built at each place.',
        items: [
            {
                date: 'may 2024 - present',
                role: 'Full Stack Developer | SYSDAM (by Pimenta de Ávila) - B2B SaaS for Dam Safety & Monitoring',
                bullets: [
                    'Led and developed the Digital Twin module, integrating different system modules into a geospatial visualization with CesiumJS for real-time dam monitoring and tracking.',
                    'Develop scalable interfaces and reusable components with React.js and Ant Design (AntD), using Context API for global state management and Axios for RESTful API integration.',
                    "Refactored the application's architecture applying design patterns and structuring reusable components, which improved code maintainability, reduced support requests by 55% and supported my back-end work with C#.",
                ],
            },
            {
                date: 'june 2022 - may 2024',
                role: 'Software Development Intern | dti digital (WPP Group) - Global Agile Software & Digital Transformation Agency',
                bullets: [
                    'Developed front-end interfaces and features for web systems in the banking and travel sectors using React.js and Material UI (MUI).',
                    'Integrated applications with RESTful APIs using Axios and Redux, also making targeted adjustments to endpoints and MySQL databases to meet front-end needs.',
                    "Implemented automated tests with Cypress and facilitated Agile ceremonies (including refinements), contributing actively to the team's planning and delivery tracking.",
                ],
            },
        ],
    },
    footer: {
        builtBy: 'Built by Eduarda Saleth with Next.js and Tailwind.',
        source: 'See the code for this site',
    },
    contact: {
        title: 'contact',
        subtitle:
            'Want to chat, ask something or work together? Just reach out.',
        emailLabel: 'send me an email',
        copy: 'copy email',
        copied: 'email copied!',
    },
};
