import type { CardsSectionData } from "../data/home";
export type CardsPageKey = "home" | "tours" | "about";

export const cardsData: Record<CardsPageKey, CardsSectionData> = {
    home: {
        title_en: "Why Choose Us?",
        title_ru: "Почему выбирают нас?",
        description_en: "We are locals sharing Socotra's beauty",
        description_ru: "Мы — местные жители, которые делятся красотой Сокотры",
        cards: [
            { id: 1, image: "/assets/images/hero/tube.jpg" },
            { id: 2, image: "/assets/images/hero/tube.jpg" },
            { id: 3, image: "/assets/images/hero/tube.jpg" },
            { id: 4, image: "/assets/images/hero/tube.jpg" },
            { id: 5, image: "/assets/images/hero/tube.jpg" },
            { id: 6, image: "/assets/images/hero/tube.jpg" },
            { id: 7, image: "/assets/images/hero/tube.jpg" },
            { id: 8, image: "/assets/images/hero/tube.jpg" },
        ],
    },

    tours: {
        title_en: "Our Tours",
        title_ru: "Наши туры",
        description_en: "Explore Socotra through unique experiences",
        description_ru: "Исследуйте Сокотру через уникальные впечатления",  
        cards: [
            { id: 1, image: "/assets/images/hero/tube.jpg" },
            { id: 2, image: "/assets/images/hero/tube.jpg" },
            { id: 3, image: "/assets/images/hero/tube.jpg" },
            { id: 4, image: "/assets/images/hero/tube.jpg" },
            { id: 5, image: "/assets/images/hero/tube.jpg" },
            { id: 6, image: "/assets/images/hero/tube.jpg" },
            { id: 7, image: "/assets/images/hero/tube.jpg" },
            { id: 8, image: "/assets/images/hero/tube.jpg" },
        ],
    },

    about: {
        title_en: "About Socotra",
        title_ru: "О Сокотре", 
        description_en: "A land like no other on Earth",
        description_ru: "Уникальная земля на Земле",  
        cards: [
            { id: 1, image: "/assets/images/hero/tube.jpg" },
            { id: 2, image: "/assets/images/hero/tube.jpg" },
            { id: 3, image: "/assets/images/hero/tube.jpg" },
            { id: 4, image: "/assets/images/hero/tube.jpg" },
            { id: 5, image: "/assets/images/hero/tube.jpg" },
            { id: 6, image: "/assets/images/hero/tube.jpg" },
            { id: 7, image: "/assets/images/hero/tube.jpg" },
            { id: 8, image: "/assets/images/hero/tube.jpg" },
        ],
    },
};