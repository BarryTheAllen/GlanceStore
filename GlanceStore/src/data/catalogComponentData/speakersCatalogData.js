import {
    yandexspeaker,
    yandexspeaker1,
    yandexspeaker2,
    yandexspeakermax,
    yandexspeakermax1,
    yandexspeakermax2,
    jblparty,
    jblparty1,
    jblparty2,
    fierospeakers,
    fierospeakers1,
    fierospeakers2,
    yandexspeakerslight,
    yandexspeakerslight1,
    yandexspeakerslight2,
} from "../sharedData/assetsImports"

const speakerCatalog = [
    {
        id: 1,
        discount: false,
        techImg: [yandexspeaker, yandexspeaker1, yandexspeaker2],
        title: "Умная колонка Яндекс.Станция Миди черный",
        price: 84999,
        discountPrice: 87999,
        isAviavable: false,
        description: "Компактная умная колонка Яндекс.Станция Миди с голосовым помощником Алисой. Качественный звук, управление умным домом и доступ к тысячам треков."
    },
    {
        id: 2,
        discount: "-10%",
        techImg: [yandexspeakermax, yandexspeakermax1, yandexspeakermax2],
        title: "Умная колонка Яндекс.Станция Макс черный",
        price: 42980,
        discountPrice: 47756,
        isAviavable: true,
        description: "Мощная Яндекс.Станция Макс с премиальным звуком и большим экраном. Идеальна для музыки, видео и управления умным домом через голосового помощника."
    },
    {
        id: 3,
        discount: false,
        techImg: [jblparty, jblparty1, jblparty2],
        title: "Аудиосистема JBL Partybox 710 черный",
        price: 11999,
        discountPrice: 14117,
        isAviavable: true,
        description: "Мощная портативная аудиосистема JBL Partybox 710 для вечеринок. Невероятная громкость, световые эффекты и длительное время работы от батареи."
    },
    {
        id: 4,
        discount: "-4%",
        techImg: [fierospeakers, fierospeakers1, fierospeakers2],
        title: "Аудиосистема Fiero Soundfall HS600 черный",
        price: 17665,
        discountPrice: 87999,
        isAviavable: false,
        description: "Стильная аудиосистема Fiero Soundfall HS600 с современным дизайном и качественным звуком. Подходит для домашнего использования и небольших вечеринок."
    },
    {
        id: 5,
        discount: false,
        techImg: [yandexspeakerslight, yandexspeakerslight1, yandexspeakerslight2],
        title: "Умная колонка Яндекс.Станция Мини 3 фиолетовый",
        price: 11999,
        discountPrice: 47756,
        isAviavable: true,
        description: "Миниатюрная и яркая Яндекс.Станция Мини 3 в фиолетовом цвете. Компактный размер, голосовое управление и интеграция с сервисами Яндекса."
    },
]

export default speakerCatalog