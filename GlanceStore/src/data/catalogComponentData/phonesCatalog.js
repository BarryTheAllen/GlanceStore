import { phone1, phone2, phone3, phone4, phone5, phone6, setlike, likeSet } from "../sharedData/assetsImports"

const phonesCatalog = [
    {
        id: 1,
        discount: false,
        techImg: [phone1, phone1, phone1],
        title: "Смартфон Apple iPhone 14 128GB",
        price: 84999,
        discountPrice: 87999,
        isAviavable: false,
        setLikeImg: setlike,
        likeSetsImg: likeSet,
        description: "Флагманский смартфон Apple iPhone 14 с памятью 128GB. Мощный процессор, продвинутая камера и яркий дисплей. Стильный дизайн и высочайшее качество сборки."
    },
    {
        id: 2,
        discount: "-10%",
        techImg: [phone2, phone2, phone2],
        title: "Смартфон Apple iPhone 12 64GB",
        price: 42980,
        discountPrice: 47756,
        isAviavable: true,
        setLikeImg: setlike,
        likeSetsImg: likeSet,
        description: "Популярный iPhone 12 с памятью 64GB. Отличное сочетание производительности и доступности. Поддержка 5G, качественные камеры и фирменный дизайн Apple."
    },
    {
        id: 3,
        discount: false,
        techImg: [phone3, phone3, phone3],
        title: "Смартфон HUAWEI nova Y61",
        price: 11999,
        discountPrice: 14117,
        isAviavable: true,
        setLikeImg: setlike,
        likeSetsImg: likeSet,
        description: "Бюджетный смартфон HUAWEI nova Y61 с хорошей камерой и автономностью. Современный дизайн и достойная производительность для повседневных задач."
    },
    {
        id: 4,
        discount: "-4%",
        techImg: [phone4, phone4, phone4],
        title: "Смартфон Xiaomi Redmi 128GB",
        price: 17665,
        discountPrice: 87999,
        isAviavable: true,
        setLikeImg: setlike,
        likeSetsImg: likeSet,
        description: "Xiaomi Redmi с объемом памяти 128GB предлагает отличное соотношение цены и качества. Большой экран, долгая батарея и производительность для всех задач."
    },
    {
        id: 5,
        discount: false,
        techImg: [phone5, phone5, phone5],
        title: "Смартфон Apple iPhone 14 128GB",
        price: 11999,
        discountPrice: 47756,
        isAviavable: true,
        setLikeImg: setlike,
        likeSetsImg: likeSet,
        description: "Еще одна модель iPhone 14 128GB по специальной цене. Все преимущества флагмана Apple: инновационные функции, защита от воды и премиальные материалы."
    },
    {
        id: 6,
        discount: "-6%",
        techImg: [phone6, phone6, phone6],
        title: "Смартфон HUAWEI nova Y61",
        price: 75999,
        discountPrice: 47756,
        isAviavable: false,
        setLikeImg: setlike,
        likeSetsImg: likeSet,
        description: "HUAWEI nova Y61 в премиальной комплектации. Улучшенная камера, расширенная память и дополнительные функции для требовательных пользователей."
    },
    {
        id: 7,
        discount: false,
        techImg: [phone1, phone1, phone1],
        title: "Смартфон Apple iPhone 14 128GB",
        price: 84999,
        discountPrice: 87999,
        isAviavable: true,
        setLikeImg: setlike,
        likeSetsImg: likeSet,
        description: "Классический iPhone 14 128GB с проверенной надежностью. Идеален для тех, кто ценит стабильность работы и экосистему Apple."
    },
    {
        id: 8,
        discount: "-10%",
        techImg: [phone2, phone2, phone2],
        title: "Смартфон Apple iPhone 12 64GB",
        price: 42980,
        discountPrice: 47756,
        isAviavable: false,
        setLikeImg: setlike,
        likeSetsImg: likeSet,
        description: "iPhone 12 64GB - оптимальный выбор для первого знакомства с техникой Apple. Проверенная модель с актуальными характеристиками."
    },
    {
        id: 9,
        discount: false,
        techImg: [phone3, phone3, phone3],
        title: "Смартфон HUAWEI nova Y61",
        price: 11999,
        discountPrice: 14117,
        isAviavable: true,
        setLikeImg: setlike,
        likeSetsImg: likeSet,
        description: "Доступный HUAWEI nova Y61 с отличной эргономикой. Компактный корпус, качественный экран и все необходимые функции современного смартфона."
    },
]

export default phonesCatalog