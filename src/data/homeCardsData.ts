import type { CardsSectionData } from "../data/home";
export type CardsPageKey = "home" | "tours" | "about";
export const cardsData: Record<CardsPageKey, CardsSectionData> = {
    home: {
        title: "Why Choose Us?",
        description: "We are locals sharing Socotra’s beauty",
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
        title: "Our Tours",
        description: "Explore Socotra through unique experiences",
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
        title: "About Socotra",
        description: "A land like no other on Earth",
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
