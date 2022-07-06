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

export const ResumeSkills: ResumeItem[] = [
    {
        description: 'JavaScript and Typescript have been my specialty for the past few years. I have worked many different frameworks like React, React Native, Express, Vue, and Socket.IO. Other jobs have also required me to be competent using design tools like Figma and Adobe XD. I have lots of experience working with many different 3rd party APIs like Steam, BitGo, Paypal, and Stripe. In my free time I have worked on some personal crypto currency projects and gained experience with Solidity (creating Ethereum smart contracts), working with Web3js, and hosting various cryptocurrency nodes (bitcoin, ethereum, monero).',
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