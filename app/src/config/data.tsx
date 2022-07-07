export const WS_URL: string = 'ws://localhost:8080';

interface ResumeItem{
    title?: string;
    subtitle?: string;
    date?: string;
    description: string;
}

export const ResumeExperience: ResumeItem[] = [
    {
        title: 'Lyncstream',
        subtitle: 'Software Developer',
        date: '2022 - Present',
        description: 'I am currently working as a software developer at Lyncstream. I am currently working on a social platform which uses React, React Native, Express, OAuth, Microsoft SQL Server, and Azure Functions.',
    },
    {
        title: 'SkinSwap',
        subtitle: 'Software Developer',
        date: '2022 - Present',
        description: 'SkinSwap is a virtual marketplace that allows clients to buy, sell, and trade online "skins" from Counter-Strike: Global Offensive and Rust. I worked as a contractor on small sections of the site to implement pricing algorithms and private APIs using Express.js, MongoDB, Socket.IO, and React.js.',
    },
    {
        title: 'Skincrib',
        subtitle: 'Lead Software Developer',
        date: '2020 - 2021',
        description: 'Skincrib is a virtual marketplace that allows clients to buy and sell online "skins" from Counter-Strike: Global Offensive. I lead the development of the backend and worked with technologies and APIs like Express.js, MongoDB, Socket.IO, and React.js. I also worked with APIs like Bitgo and Steam to manage various features of the website.',
    },
];

export interface ResumeSkill{
    category: string;
    skills: string[];
}

export const ResumeSkills: ResumeSkill[] = [
    {
        category: 'Languages',
        skills: [
            'JavaScript',
            'Python',
            'Solidity',
            'SQL'
        ]
    },
    {
        category: 'Frameworks',
        skills: [
            'Electron',
            'React',
            'React Native',
            'Vue',
            'Express',
            'Socket.IO',
            'PassportJS',
            'uWebSockets',
        ]
    },
    {
        category: 'Technologies',
        skills: [
            'TypeScript',
            'Node.js',
            'Web3.js',
            'JSON Web Token (JWT)',
            'Cryptography (Bcrypt, PGP)',
            'OAuth',
            'Redis',
            'MongoDB',
            'Microsoft SQL Server',
            'Elasticsearch',
        ]
    },
    {
        category: '3rd Party APIs',
        skills: [
            'Bitgo',
            'Steam',
            'Stripe',
            'Paypal',
            'Google Cloud',
        ]
    },
    {
        category: 'Miscellaneous',
        skills: [
            'Adobe XD',
            'Figma',
            'Git',
            'Linux',
        ]
    }
];

export interface ContactMethod{
    username: string;
    url: string;
    platform: string;
}

export const ContactMethods: ContactMethod[] = [
    {
        username: '@Easton',
        url: 'https://t.me/Easton',
        platform: 'Telegram',
    },
    {
        username: '@Easton36',
        url: 'https://github.com/Easton36',
        platform: 'Github',
    }
];