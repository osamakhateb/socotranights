export interface OurStoryData {
    title_en: string;
    title_ru: string;
    subtitle_en?: string;
    subtitle_ru?: string;
    description_en: string;
    description_ru: string;
    quote_en: string;
    quote_ru: string;
    imageUrl: string;

}

export const ourStoryData: OurStoryData = {
    title_en: "Our Story",
    title_ru: "Наша история",
    subtitle_en: "Welcome to Socotra",
    subtitle_ru: "Добро пожаловать в Сокотры",
    description_en: `Welcome to "Secrets of Socotra"! Our team of local guides is excited to take you on an unforgettable journey through the stunning landscapes and rich culture of our beautiful island. We aim to show you the hidden treasures of Socotra, combining adventure with relaxation to create lasting memories.`,
    description_ru: `Добро пожаловать в «Secrets of Socotra»! Наша команда местных гидов с радостью отправится вместе с вами в незабываемое путешествие по потрясающим ландшафтам и богатой культуре нашего прекрасного острова. Мы стремимся показать вам скрытые сокровища Сокотры, сочетая приключения с отдыхом, чтобы создать воспоминания, которые останутся с вами навсегда.`,
    quote_en: "Our mission is to offer exceptional travel services that cater to every traveler’s needs, while also protecting the natural beauty of Socotra for future generations.«Discovering Socotra isn’t just a trip; it’s an adventure filled with simplicity, warmth, and genuine connections.»",
    quote_ru: "Наша миссия — предоставлять исключительный уровень туристических услуг, учитывая потребности каждого путешественника, и одновременно сохранять природную красоту Сокотры для будущих поколений. «Открытие Сокотры — это не просто путешествие, это приключение, наполненное простотой, теплом и искренними связями.»",
    imageUrl: "/assets/images/hero/experience.jpg",
};
