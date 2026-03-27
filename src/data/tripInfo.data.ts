import type { TripInfoData } from './tripInfo.types';

export const tripInfoStaticData: TripInfoData = {
    title_en: "Trip Inclusions & Important Information",
    title_ru: "Включено в тур и важная информация",
    sections: {
        included: {
            title_en: "What's Included in Our Trips",
            title_ru: "Что включено в наши туры",
            items: [
                { id: '1', text_en: '6 nights of fully equipped camping (tents, mattress, linens, blankets)', text_ru: '6 ночей кемпинга с полным оснащением (палатки, матрасы, постельное бельё, одеяла)' },
                { id: '2', text_en: 'Protected area access fees', text_ru: 'Сборы за доступ в охраняемые природные зоны' },
                { id: '3', text_en: 'All transportation within Socotra', text_ru: 'Весь транспорт по острову Сокотра' },
                { id: '4', text_en: 'English-speaking local guide', text_ru: 'Местный гид, говорящий на английском языке' },
                { id: '5', text_en: 'Three daily meals, purified water, coffee, tea, soft drinks & snacks', text_ru: 'Трёхразовое питание, питьевая вода, кофе, чай, безалкогольные напитки и закуски' },
                { id: '6', text_en: 'Snorkeling equipment', text_ru: 'Снаряжение для снорклинга' },
                { id: '7', text_en: 'Wi-Fi access', text_ru: 'Доступ к Wi-Fi' },
                { id: '8', text_en: 'Visa processing (USD 160)', text_ru: 'Оформление визы (160 долларов США)' }
            ]
        },
        notIncluded: {
            title_en: "What's Not Included",
            title_ru: "Что не включено",
            items: [
                { id: '9', text_en: 'Round-trip flights Jeddah – Socotra (approx. USD 800)', text_ru: 'Перелёт туда и обратно по маршруту Джидда – Сокотра (примерно 800 долларов США)' },
                { id: '10', text_en: 'International flight to Jeddah', text_ru: 'Международный перелёт до Джидды' },
                { id: '11', text_en: 'Accommodation & meals in Jeddah', text_ru: 'Проживание и питание в Джидде' },
                { id: '12', text_en: 'Travel insurance', text_ru: 'Страхование путешествия' },
                { id: '13', text_en: 'Personal Expenses & Optional Extras', text_ru: 'Личные расходы и дополнительные (по желанию) активности' }
            ]
        }
    }
};