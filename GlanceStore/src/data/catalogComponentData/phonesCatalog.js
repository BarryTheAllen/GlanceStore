import { iphone14,
        iphone141,
        iphone142,
        iphone13,
        iphone131,
        iphone132,
        nova6,
        nova61,
        nova62,
        xiaomi14c,
        xiaomi14c1,
        xiaomi14c2,
        samsungs25,
        samsungs251,
        samsungs252,
        huaweipura80,
        huaweipura801,
        huaweipura802,
        iphone16,
        iphone161,
        iphone162,
        opporeno12f,
        opporeno12f1,
        opporeno12f2,
        xiaominote14,
        xiaominote141,
        xiaominote142,
    } from "../sharedData/assetsImports"

const phonesCatalog = [
    {
        id: 1,
        discount: false,
        techImg: [iphone14, iphone141, iphone142],
        title: "Смартфон Apple iPhone 14 128GB",
        price: 84999,
        discountPrice: 87999,
        isAviavable: false,
        description: "Флагманский смартфон Apple iPhone 14 с памятью 128GB. Мощный процессор, продвинутая камера и яркий дисплей. Стильный дизайн и высочайшее качество сборки."
    },
    {
        id: 2,
        discount: "-10%",
        techImg: [iphone13, iphone131, iphone132],
        title: "Смартфон Apple iPhone 13 64GB",
        price: 42980,
        discountPrice: 47756,
        isAviavable: true,
        description: "Популярный iPhone 13 с памятью 64GB. Отличное сочетание производительности и доступности. Поддержка 5G, качественные камеры и фирменный дизайн Apple."
    },
    {
        id: 3,
        discount: false,
        techImg: [nova6, nova61, nova62],
        title: "Смартфон HUAWEI nova Y61",
        price: 11999,
        discountPrice: 14117,
        isAviavable: true,
        description: "Бюджетный смартфон HUAWEI nova Y61 с хорошей камерой и автономностью. Современный дизайн и достойная производительность для повседневных задач."
    },
    {
        id: 4,
        discount: "-4%",
        techImg: [xiaomi14c, xiaomi14c1, xiaomi14c2],
        title: "Смартфон Xiaomi Redmi 128GB",
        price: 17665,
        discountPrice: 87999,
        isAviavable: true,
        description: "Xiaomi Redmi с объемом памяти 128GB предлагает отличное соотношение цены и качества. Большой экран, долгая батарея и производительность для всех задач."
    },
    {
        id: 5,
        discount: false,
        techImg: [samsungs25, samsungs251, samsungs252],
        title: "Смартфон Samsung Galaxy S25 FE 8/256GB Dark Blue",
        price: 54999,
        discountPrice: 47756,
        isAviavable: true,
        description: "Samsung Galaxy S25 FE 8/256GB Идеальный баланс цены и возможностей флагмана. Мощный процессор, огромная память 8/256 ГБ и профессиональная камера в элегантном темно-синем корпусе."
    },
    {
        id: 6,
        discount: "-6%",
        techImg: [iphone16, iphone161, iphone162],
        title: "Смартфон Apple iPhone 16 Pro 256GB Desert Titanium",
        price: 129999,
        discountPrice: 151999,
        isAviavable: false,
        description: "Смартфон Apple iPhone 16 Pro 256GB Desert Titanium — новый цвет пустыни в культовом титановом дизайне. Мощь чипа A18 Pro, инновационная камера и исключительная прочность для тех, кто задает тренды."
    },
    {
        id: 7,
        discount: false,
        techImg: [huaweipura80, huaweipura801, huaweipura802],
        title: "Смартфон Huawei Pura 80 Pro 12/512GB Black",
        price: 88999,
        discountPrice: 84999,
        isAviavable: true,
        description: "Смартфон Huawei Pura 80 Pro 12/512GB Black — это воплощение мощи и элегантности. Флагман с огромной памятью и инновационной камерой для тех, кто создает будущее уже сегодня."
    },
    {
        id: 8,
        discount: "-10%",
        techImg: [opporeno12f, opporeno12f1, opporeno12f2],
        title: "Смартфон Oppo Reno 12F 8/512GB Matte Grey",
        price: 29999,
        discountPrice: 47756,
        isAviavable: false,
        description: "Смартфон Oppo Reno 12F 8/512GB Matte Grey — стиль и мощь в матовом сером корпусе. Высокая производительность, огромная память и инновационные функции для уверенного использования каждый день."
    },
    {
        id: 9,
        discount: false,
        techImg: [xiaominote14, xiaominote141, xiaominote142],
        title: "Смартфон Xiaomi Redmi Note 14 Pro+ 5G 12/512GB Lavender Purple",
        price: 11999,
        discountPrice: 14117,
        isAviavable: true,
        description: "Смартфон Xiaomi Redmi Note 14 Pro+ 5G 12/512GB Lavender Purple — мощь и эстетика в нежном лавандовом оттенке. Высокая производительность, поддержка 5G и огромная память для самых смелых задач."
    },
]

export default phonesCatalog