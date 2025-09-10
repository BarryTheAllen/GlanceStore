import {
    xiaomitv,
    xiaomitv1,
    xiaomitv2,
    dexptv,
    dexptv1,
    dexptv2,
    tcltv,
    tcltv1,
    tcltv2,
    samsungtv,
    samsungtv1,
    samsungtv2,
    falcon,
    falcon1,
    falcon2,
} from "../sharedData/assetsImports"

const tvCatalog = [
    {
        id: 1,
        discount: false,
        techImg: [xiaomitv, xiaomitv1, xiaomitv2],
        title: "43' (108 см) Телевизор Xiaomi TV A 43 2025 черный",
        price: 84999,
        discountPrice: 87999,
        isAviavable: true,
        description: "43-дюймовый телевизор Xiaomi TV A 2025 года с современным дизайном и Smart TV. Яркий экран, качественное изображение и доступ к множеству приложений и сервисов."
    },
    {
        id: 2,
        discount: "-10%",
        techImg: [dexptv, dexptv1, dexptv2],
        title: "43' (109 см) Телевизор DEXP A431 серый",
        price: 42980,
        discountPrice: 47756,
        isAviavable: false,
        description: "Бюджетный 43-дюймовый телевизор DEXP A431 в сером корпусе. Хорошее качество изображения, простой интерфейс и надежная работа для ежедневного просмотра."
    },
    {
        id: 3,
        discount: false,
        techImg: [tcltv, tcltv1, tcltv2],
        title: "55' (139.7 см) Телевизор TCL 55C6K черный",
        price: 11999,
        discountPrice: 14117,
        isAviavable: false,
        description: "55-дюймовый телевизор TCL 55C6K с 4K разрешением и технологией HDR. Насыщенные цвета, высокая контрастность и Smart TV с голосовым управлением."
    },
    {
        id: 4,
        discount: "-4%",
        techImg: [samsungtv, samsungtv1, samsungtv2],
        title: "55' (138 см) Телевизор Samsung UE55DU7100UXRU черный",
        price: 17665,
        discountPrice: 87999,
        isAviavable: true,
        description: "55-дюймовый Samsung UE55DU7100 с Crystal UHD дисплеем. Реалистичное изображение, платформа Tizen и возможность управления голосом через Bixby."
    },
    {
        id: 5,
        discount: false,
        techImg: [falcon, falcon1, falcon2],
        title: "65' (165.1 см) Телевизор iFFALCON 65U85 черный",
        price: 11999,
        discountPrice: 47756,
        isAviavable: false,
        description: "Большой 65-дюймовый телевизор iFFALCON 65U85 с 4K разрешением. Современный дизайн, мощный звук и Smart TV функционал для кинопросмотров и игр."
    },
]

export default tvCatalog