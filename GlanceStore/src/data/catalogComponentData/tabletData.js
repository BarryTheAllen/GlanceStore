import {
    galaxy,
    galaxy1,
    galaxy2,
    xiaomi,
    xiaomi1,
    xiaomi2,
    honor,
    honor1,
    honor2,
    tecnop,
    tecnop1,
    tecnop2,
    ipad,
    ipad1,
    ipad2,
    setlike,
    likeSet
} from "../sharedData/assetsImports"

const tabletCatalog = [
    {
        id: 1,
        discount: "-4%",
        techImg: [galaxy, galaxy1, galaxy2],
        title: "11' Планшет Samsung Galaxy Tab A9 + 5G 128 ГБ серый",
        price: 84999,
        discountPrice: 87999,
        isAviavable: false,
        setLikeImg: setlike,
        likeSetsImg: likeSet,
        description: "11-дюймовый планшет Samsung Galaxy Tab A9+ с поддержкой 5G и памятью 128 ГБ. Идеален для работы, развлечений и мобильного интернета. Стильный серый корпус."
    },
    {
        id: 2,
        discount: "-10%",
        techImg: [xiaomi, xiaomi1, xiaomi2],
        title: "12.1' Планшет Xiaomi Redmi Pad Pro Wi-Fi 256 ГБ серый",
        price: 42980,
        discountPrice: 47756,
        isAviavable: true,
        setLikeImg: setlike,
        likeSetsImg: likeSet,
        description: "Большой 12.1-дюймовый планшет Xiaomi Redmi Pad Pro с Wi-Fi и объемом памяти 256 ГБ. Отличный экран и производительность для работы и мультимедиа."
    },
    {
        id: 3,
        discount: "-15%",
        techImg: [honor, honor1, honor2],
        title: "12.1' Планшет HONOR Pad 9 5G 256 ГБ серый",
        price: 11999,
        discountPrice: 14117,
        isAviavable: false,
        setLikeImg: setlike,
        likeSetsImg: likeSet,
        description: "Премиальный планшет HONOR Pad 9 с поддержкой 5G и 256 ГБ памяти. 12.1-дюймовый экран, мощная начинка и стильный серый дизайн для продуктивной работы."
    },
    {
        id: 4,
        discount: "-4%",
        techImg: [tecnop, tecnop1, tecnop2],
        title: "10.95' Планшет Tecno Megapad 11 LTE 256 ГБ серый",
        price: 17665,
        discountPrice: 87999,
        isAviavable: true,
        setLikeImg: setlike,
        likeSetsImg: likeSet,
        description: "Универсальный планшет Tecno Megapad 11 с поддержкой LTE и 256 ГБ памяти. 10.95-дюймовый экран, современный дизайн и все необходимое для повседневных задач."
    },
]

export default tabletCatalog