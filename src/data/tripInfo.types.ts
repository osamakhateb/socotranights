/* export interface TripInfoData {
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
 */
// data/tripInfo.types.ts
export interface TripInfoItem {
    id: string;
    text_en: string;
    text_ru: string;
}

export interface TripInfoSection {
    title_en: string;
    title_ru: string;
    items: TripInfoItem[];
}

export interface TripInfoData {
    title_en: string;
    title_ru: string;
    sections: {
        included: TripInfoSection;
        notIncluded: TripInfoSection;
    };
}