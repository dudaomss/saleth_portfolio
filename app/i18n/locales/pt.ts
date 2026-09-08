import type { Dictionary } from '../types';

export const pt: Dictionary = {
    backToTop: 'Voltar ao topo',
    social: { linkedin: 'LinkedIn', github: 'GitHub' },
    nav: {
        about: 'sobre',
        skills: 'habilidades',
        projects: 'projetos',
        experience: 'experiência',
        contact: 'contato',
    },
    header: {
        resume: 'baixe meu currículo',
        resumeShort: 'currículo',
        languageLabel: 'Selecionar idioma',
        openMenu: 'Abrir menu de navegação',
        menuTitle: 'Navegação',
        navLabel: 'Navegação principal',
    },
    hero: {
        greeting: 'Olá, eu sou a ',
        name: 'Eduarda Saleth',
        lead: 'Desenvolvedora Full Stack com mais de 4 anos de experiência em aplicações web. Experiência com React, Next.js, TypeScript, C#/.NET, APIs REST e visualização de dados geoespaciais.',
        scrollDown: 'Ir para a seção sobre',
    },
    about: {
        title: 'sobre',
        paragraphs: [
            [
                { text: 'Sou ' },
                { text: 'desenvolvedora Full Stack', accent: true },
                {
                    text: ' com mais de 4 anos de experiência no desenvolvimento de soluções web. Ao longo da minha trajetória, já atuei em projetos dos setores bancário, de viagens e, atualmente, em sistemas de monitoramento de barragens.',
                },
            ],
            [
                { text: 'Minha experiência é principalmente com ' },
                { text: 'React.js, Next.js, TypeScript e C# (.NET)', accent: true },
                {
                    text: ', além de integração com APIs REST, construção de interfaces, visualização de dados e aplicações geoespaciais. Também utilizo ferramentas como ',
                },
                { text: 'Claude e Cursor', accent: true },
                {
                    text: ' no dia a dia para apoiar o desenvolvimento e tornar as entregas mais ágeis.',
                },
            ],
            [
                {
                    text: 'Quando não estou codando, provavelmente estou jogando, lendo, assistindo a algum reality show ou ouvindo música — principalmente NewJeans. Também sou mãe de uma cachorrinha caramelo linda chamada ',
                },
                { text: 'Shuri', accent: true },
                { text: '. 🐶' },
            ],
        ],
    },
    skills: {
        title: 'habilidades',
        subtitle:
            'Tecnologias que utilizo atualmente no meu dia a dia como desenvolvedora.',
        groups: {
            languages: 'linguagens',
            frontend: 'front-end',
            backend: 'back-end e dados',
            tools: 'ferramentas',
            spokenLanguages: 'idiomas',
        },
        spokenLanguages: ['Português (nativo)', 'Inglês (intermediário)'],
    },
    projects: {
        title: 'projetos',
        subtitle: 'Coisas que construí do design ao deploy.',
        stacksLabel: 'stacks',
        liveLabel: 'ver online',
        repoLabel: 'código',
        previous: 'Projeto anterior',
        next: 'Próximo projeto',
        goToProject: 'Ir para o projeto',
        items: {
            'random-cine': {
                description:
                    'Um sorteador de filmes e séries para quem cansa de escolher. A pessoa define o tipo, a categoria e as plataformas que assina, e o app devolve um título aleatório com os dados vindos da API do TMDB.',
            },
            'melhores-do-ano': {
                description:
                    'Uma plataforma para criar votações entre amigos, do tipo "quem é o mais atrasado do ano". Cada pessoa entra e vota nas categorias criadas e, quando a data de encerramento chega, o sistema monta sozinho uma apresentação anunciando os vencedores — pronta para a festinha de fim de ano ou qualquer outra ocasião.',
            },
            'awards-ballot': {
                description:
                    'Um bolão interativo para apostar em quem leva a estatueta nas principais premiações de cinema, música e televisão. Depois de escolher os favoritos de cada categoria, o app gera um template personalizado com as apostas para salvar e compartilhar.',
            },
        },
    },
    experience: {
        title: 'experiência',
        subtitle: 'Onde trabalhei e o que construí em cada lugar.',
        items: [
            {
                date: 'maio 2024 - até o momento',
                role: 'Desenvolvedora Full Stack | SYSDAM',
                bullets: [
                    'Liderei e desenvolvi o módulo de Digital Twin, integrando os diferentes módulos do sistema em uma visualização geoespacial com CesiumJS para monitoramento e rastreamento de barragens em tempo real.',
                    'Desenvolvo interfaces escaláveis e componentes reutilizáveis com React.js e Ant Design (AntD), utilizando Context API para gerenciamento de estado global e Axios para integração com APIs RESTful.',
                    'Refatorei a arquitetura da aplicação aplicando padrões de projeto e estruturando componentes reutilizáveis, o que melhorou a manutenibilidade do código, reduziu em 55% os chamados de suporte e facilitou minha atuação no back-end com C#.',
                ],
            },
            {
                date: 'junho 2022 - maio 2024',
                role: 'Estagiária em Desenvolvimento de Software | dti digital',
                bullets: [
                    'Desenvolvi interfaces e funcionalidades front-end para sistemas web dos setores bancário e de viagens, utilizando React.js e Material UI (MUI).',
                    'Integrei aplicações com APIs RESTful utilizando Axios e Redux, realizando também ajustes pontuais em endpoints e banco de dados MySQL para atender às necessidades do front-end.',
                    'Implementei testes automatizados com Cypress e conduzi ritos de metodologia ágil (incluindo refinamentos), contribuindo ativamente para o planejamento e acompanhamento das entregas do time.',
                ],
            },
        ],
    },
    footer: {
        builtBy: 'Feito por Eduarda Saleth com Next.js e Tailwind.',
        source: 'Ver o código deste site',
    },
    contact: {
        title: 'contato',
        subtitle:
            'Quer trocar uma ideia, tirar uma dúvida ou trabalhar comigo? É só chamar.',
        emailLabel: 'me mandar um e-mail',
        copy: 'copiar e-mail',
        copied: 'e-mail copiado!',
    },
};
