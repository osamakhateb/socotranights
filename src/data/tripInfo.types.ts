export interface TripInfoData {
    title: string;
    sections: {
        included: Section;
        notIncluded: Section;
    };
    assistance: Assistance;
}

export interface Section {
    title: string;
    items: TripItem[];
}

export interface TripItem {
    id: string;
    text: string;
}

export interface Assistance {
    title: string;
    description: string;
    buttonText: string;
}
