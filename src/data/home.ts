export interface HeroData {
    title: string;
    subtitle: string;
    backgroundImage: string;
    buttonText?: string;
}


export const heroContent: HeroData = {
    title: "Discover the Magic of Socotra",
    subtitle: "Experience authentic, tailor-made adventures",
    buttonText: "BOOK NOW",
    backgroundImage: "/assets/images/hero/tube.jpg"
};

export const HeroTours: HeroData = {
    title: "Our Tours & Experiences",
    subtitle: "Discover the magic of Socotra Island through our carefully crafted adventures",
    backgroundImage: "/assets/images/hero/SocotraSection.jpg"
};

export const HeroAbout: HeroData = {
    title: "About Socotra Travels",
    subtitle: "Discover the story behind our passion for sharing Socotra's beauty",
    backgroundImage: "/assets/images/hero/SocotraSection.jpg"
};



export interface SectionData {
    title: string;
    subtitle: string;
    description: string;
    quote: string;
    imageUrl: string;
}

export const socotraData: SectionData = {
    title: "Experience Socotra through Local Eyes",
    subtitle: "Authentic, Tailor-Made Adventures Await",
    description: `Welcome to NightSky Socotra Travels, a locally operated travel agency run by native people of Socotra.

We offer tailor-made tours to explore the island's breathtaking beauty, from pristine beaches to majestic mountains.

Book your trip today and let us create an unforgettable adventure for you!`,
    quote: "Socotra’s Secret? A peaceful life built on simplicity, kindness, and human connection",
    imageUrl: "/assets/images/hero/SocotraSection.jpg",
};





const FaqData = [
    {
        question: "What services does SquareUp provide?",
        answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
        question: "How can SquareUp help my business?",
        answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
    {
        question: "What industries does SquareUp work with?",
        answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
    },
];

export default FaqData;




