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