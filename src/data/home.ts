export interface HeroData {
    title_en: string;
    title_ru: string;
    subtitle_en: string;
    subtitle_ru: string;
    backgroundImage: string;
    buttonText?: string;
}


export const heroContent: HeroData = {
    title_en: "Discover the secrets of Socotra",
    subtitle_en: "Where simplicity meets adventure",
    title_ru: "Открой тайны Сокотры",
    subtitle_ru: "Где простота встречается с приключением",
    buttonText: "BOOK NOW",
    backgroundImage: "/assets/images/hero/socotrahome4.jpg"
};

export const HeroTours: HeroData = {
    title_en: " The island of secrets and adventures",
    subtitle_en: "",
    title_ru: "Остров тайн и приключений",
    subtitle_ru: "",
    backgroundImage: "/assets/images/hero/socotrahome5.jpg"
};

export const HeroAbout: HeroData = {
    title_en: " Embrace simplicity in Socotra where every moment is an adventure! ",
    subtitle_en: "",
    title_ru: "Окунитесь в простоту Сокотры где каждый момент — это приключение!",
    subtitle_ru: "",
    backgroundImage: "/assets/images/hero/socotrahome3.jpg"
};




export interface SectionData {
    title_en: string;
    title_ru: string;
    description_en: string;
    description_ru: string;
    imageUrl: string;
}

export const socotraData: SectionData = {
    title_en: "experience the island’s Hidden Treasures through local eyes",
    title_ru: "Откройте скрытые сокровища острова глазами местных жителей",
    description_en: `Welcome to Socotra Secrets, where adventure meets authenticity.
                        Explore the untouched beauty of Socotra Island through the eyes of its locals.
                        Experience our rich culture, stunning landscapes, and the warmth of our hospitality.`,
    description_ru: `Добро пожаловать в Socotra Secrets — место, где приключение встречается с подлинностью.
                        Исследуйте нетронутую красоту острова Сокотра глазами его жителей.
                        Почувствуйте нашу богатую культуру, потрясающие пейзажи и тепло нашего гостеприимства.`,
    imageUrl: "/assets/images/hero/SocotraSection.jpg",
};





export const FaqData = {
    en: [
        {
            question: "How do I get to Socotra?",
            answer: "There are regular flights from Abu Dhabi, UAE to Socotra Airport. Flights operate multiple times per week. You can also reach via Yemenia Airways from Cairo or Seiyun."
        },
        {
            question: "What is the best time to visit Socotra?",
            answer: "The best time to visit Socotra is from October to April when the weather is mild and pleasant. Avoid the monsoon season from May to September when winds are strong."
        },
        {
            question: "Do I need a visa to visit Socotra?",
            answer: "Yes, all foreign visitors need a visa to enter Socotra. We can assist you with the visa application process as part of our tour packages."
        },
        {
            question: "What vaccinations do I need?",
            answer: "Recommended vaccinations include Hepatitis A, Typhoid, and Tetanus. Consult your doctor at least 4-6 weeks before travel."
        }
    ],
    ru: [
        {
            question: "Как добраться до Сокотры?",
            answer: "Регулярные рейсы из Абу-Даби, ОАЭ в аэропорт Сокотры. Рейсы выполняются несколько раз в неделю. Также можно добраться через Yemenia Airways из Каира или Сейюна."
        },
        {
            question: "Какое лучшее время для посещения Сокотры?",
            answer: "Лучшее время для посещения Сокотры - с октября по апрель, когда погода мягкая и приятная. Избегайте сезона муссонов с мая по сентябрь, когда дуют сильные ветры."
        },
        {
            question: "Нужна ли виза для посещения Сокотры?",
            answer: "Да, всем иностранным посетителям нужна виза для въезда на Сокотру. Мы можем помочь вам с оформлением визы в рамках наших туристических пакетов."
        },
        {
            question: "Какие прививки мне нужны?",
            answer: "Рекомендуемые прививки: гепатит А, брюшной тиф и столбняк. Проконсультируйтесь с врачом как минимум за 4-6 недель до поездки."
        }
    ]
};

export const FaqSectionData = {
    en: {
        mainTitle: "How To Get To Socotra",
        subtitle: "Flights & Travel Tips"
    },
    ru: {
        mainTitle: "Как добраться до Сокотры",
        subtitle: "Рейсы и советы для путешествий"
    }
};



export interface ImageCard {
    id: number;
    image: string;
}

export interface CardsSectionData {
    title_en: string;
    title_ru: string;
    description_en?: string;
    description_ru?: string;
    cards: ImageCard[];
}