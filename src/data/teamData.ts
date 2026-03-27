export interface AboutSection {
    id: string;
    type: 'sustainability' | 'team';
    title: string;
    description?: string;
    items?: string[];
    paragraphs?: string[];
}

export interface AboutData {
    title: string;
    sections: AboutSection[];
}

export const aboutData: AboutData = {
    title: "About Us",
    sections: [
        {
            id: "1",
            type: "sustainability",
            title: "Our Commitment to Sustainability",
            description: "As locals of Socotra, we understand the importance of preserving our island's unique ecosystem. We are committed to:",
            items: [
                "Sustainable tourism practices",
                "Supporting local communities",
                "Protecting Socotra's endemic flora and fauna",
                "Minimizing environmental impact",
                "Minimizing environmental impact",
                "Educating visitors about conservation"
                
            ]
        },
        {
            id: "2",
            type: "team",
            title: "Meet Our Team",
            paragraphs: [
                "Our team consists of experienced local guides, travel coordinators, and hospitality professionals who are passionate about sharing Socotra's wonders with the world.",
                "Each team member brings unique skills and deep knowledge of different aspects of the island, from its geology and biology to its culture and traditions.",
                "Our friendly local team will greet you at Socotra Airport and help you start your adventure stress-free."
            ]
        }
    ]
}; 


/* 
export interface AboutSection {
    id: string;
    type: 'sustainability' | 'team';
    title_en: string;
    title_ru: string;
    description_en?: string;
    description_ru?: string;
    items_en?: string[];
    items_ru?: string[];
    paragraphs_en?: string[];
    paragraphs_ru?: string[];
}

export interface AboutData {
    title_en: string;
    title_ru: string;
    sections: AboutSection[];
}

export const aboutData: AboutData = {
    title_en: "About Us",
    title_ru: "О нас",
    sections: [
        {
            id: "1",
            type: "sustainability",
            title_en: "Our Commitment to Sustainability",
            title_ru: "Наша приверженность устойчивому развитию",
            description_en: "As locals of Socotra, we understand the importance of preserving our island's unique ecosystem. We are committed to:",
            description_ru: "Будучи местными жителями Сокотры, мы понимаем важность сохранения уникальной экосистемы нашего острова. Мы стремимся к:",
            items_en: [
                "Sustainable tourism practices",
                "Supporting local communities",
                "Protecting Socotra's endemic flora and fauna",
                "Minimizing environmental impact",
                "Educating visitors about conservation"
            ],
            items_ru: [
                "Практика устойчивого туризма",
                "Поддержка местных сообществ",
                "Защита эндемичной флоры и фауны Сокотры",
                "Минимизация воздействия на окружающую среду",
                "Образование посетителей о сохранении природы"
            ]
        },
        {
            id: "2",
            type: "team",
            title_en: "Meet Our Team",
            title_ru: "Познакомьтесь с нашей командой",
            paragraphs_en: [
                "Our team consists of experienced local guides, travel coordinators, and hospitality professionals who are passionate about sharing Socotra's wonders with the world.",
                "Each team member brings unique skills and deep knowledge of different aspects of the island, from its geology and biology to its culture and traditions.",
                "Our friendly local team will greet you at Socotra Airport and help you start your adventure stress-free."
            ],
            paragraphs_ru: [
                "Наша команда состоит из опытных местных гидов, координаторов по туризму и профессионалов в области гостеприимства, которые увлечены тем, чтобы поделиться чудесами Сокотры с миром.",
                "Каждый член команды привносит уникальные навыки и глубокие знания о различных аспектах острова, от его геологии и биологии до культуры и традиций.",
                "Наша дружелюбная местная команда встретит вас в аэропорту Сокотры и поможет начать ваше приключение без стресса."
            ]
        }
    ]
}; */