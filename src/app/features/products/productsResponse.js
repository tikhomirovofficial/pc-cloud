import { getImagePath } from "../../../utils/getImagePath";

export const productsResponse = {
    products: [
        {
            id: 1,
            category: 1,
            name: "ПК ARDOR GAMING RAGE H332",
            price: 109990,
            sale_price: null,
            rating: 4.5,
            image: getImagePath("computers/1.webp")
        },
        {
            id: 2,
            category: 1,
            name: "ПК ARDOR GAMING RAGE H339",
            price: 85990,
            sale_price: 78990,
            rating: 4.3,
            image: getImagePath("computers/2.webp")
        },
        {
            id: 3,
            category: 1,
            name: "ПК ARDOR GAMING RAGE H338",
            price: 85990,
            sale_price: 78990,
            rating: 4.7,
            image: getImagePath("computers/3.webp")
        },
        {
            id: 4,
            category: 1,
            name: "ПК MSI MAG Infinite S3 13NUC5-1054X",
            price: 109990,
            sale_price: null,
            rating: 4.1,
            image: getImagePath("computers/4.webp")
        },
        {
            id: 5,
            category: 1,
            name: "Мини ПК MSI MPG Trident 3 13TC-072XRU",
            price: 112499,
            sale_price: 107000,
            rating: 4.1,
            image: getImagePath("computers/5.webp")
        },
        {
            id: 6,
            category: 1,
            name: "ПК ARDOR GAMING NEO M136",
            price: 50299,
            sale_price: 42399,
            rating: 4.1,
            image: getImagePath("computers/6.webp")
        },
        {
            id: 7,
            category: 1,
            name: "ПК iRU Game 510B7GMA MT [2008940]",
            price: 94299,
            sale_price: 89990,
            rating: 4.1,
            image: getImagePath("computers/7.webp")
        },
        {
            id: 8,
            category: 1,
            name: "ПК ARDOR GAMING NEO M142",
            price: 94299,
            sale_price: 89990,
            rating: 4.1,
            image: getImagePath("computers/8.webp")
        }
    ],
    categories: [
        {
            id: 1,
            name: "Готовые ПК"
        },
        {
            id: 2,
            name: "Смартфоны"
        }
    ]

}