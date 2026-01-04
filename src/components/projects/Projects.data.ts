export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    techs: string[];
    fullTechs?: string[];
    demoWeb?: string;
    demoApp?: string;
    github?: string;
}


export const projects: Project[] = [
    {
        id: 1,
        title: "PolyGo - Online Language & Cultural Exchange Platform",
        description:
            "A social language-learning platform where users connect through cultural events in group call rooms with live translation, games, and social features.",
        image: "/images/projects/polygo_pj.png",
        techs: ["Flutter", "Next.js", "Tailwind CSS", "RESTful API", "PostgreSQL", "+10 more"],
        fullTechs: [
            "Flutter",
            "Next.js",
            "Tailwind CSS",
            "TypeScript",
            "ASP.NET",
            "Hangfire",
            "RESTful API",
            "PostgreSQL",
            "Redis",
            "WebRTC",
            "JWT",
            "SignalR",
            "Docker",
            "Azure Service",
            "OpenAI",
            "PayOs",
        ],
        github: "https://github.com/QuynhNhu6927/FPT_Capstone_PolyGo-MB.git",
        demoWeb: "https://drive.google.com/file/d/1OhyPBWBtZvGznTj-e5BG4x1OZSs0f3iK/view?usp=sharing",
        demoApp: "https://drive.google.com/file/d/1AoogLLf7jcg0LzY9qJ-cOaV0qk_N-Gmq/view?usp=sharing",
    },
    {
        id: 2,
        title: "SnapRoom – Interior Design & Marketplace Platform",
        description:
            "A marketplace where interior designers sell furniture and design concepts, allowing users to browse, purchase, and chat directly with designers.",
        image: "/images/projects/snaproom.png",
        techs: ["Flutter", "React.js", "Material UI", "RESTful API", "MySQL", "+6 more"],
        fullTechs: [
            "Flutter",
            "React.js",
            "Material UI",
            "JavaScript",
            "ASP.NET",
            "RESTful API",
            "MySQL",
            "JWT",
            "SignalR",
            "Docker",
            "PayOs",
        ],
        github: "https://github.com/DreamStarsCompany",
        demoWeb: "https://drive.google.com/file/d/1O_W1cc6YaElxEZTvtsBCzvXTH9LlL6BN/view?usp=sharing",
        demoApp: "https://drive.google.com/file/d/1UnbuDUnAMTARIdJ_1qfD79LConbSe0FV/view?usp=sharing",
    },
];
