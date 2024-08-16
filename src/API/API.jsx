// import axios from "axios";
//
// export const fetchProducts = async () => {
//     try {
//         const response = await axios.get('https://busya.kuratnik.by/api/v1/categories');
//         console.log("Response data:", response.data);
//
//         // Извлекаем все продукты из всех категорий
//         const allProducts = response.data.data.reduce((acc, category) => {
//             return acc.concat(category.products);
//         }, []);
//
//         return (allProducts);
//     } catch (error) {
//         console.error("Ошибка при получении данных:", error);
//         throw(error)
//     }
// };

// import axios from 'axios';
//
// export const fetchProducts = async () => {
//     try {
//         const response = await axios.get('https://busya.kuratnik.by/api/v1/categories');
//         // console.log("Response data:", response.data);
//
//         // Извлекаем все продукты из всех категорий
//         const allProducts = response.data.data.flatMap(category => category.products);
//         console.log(allProducts)
//         return allProducts;
//     } catch (error) {
//         console.error("Ошибка при получении данных:", error);
//         throw error;
//     }
// };
// export const fetchProductsCategory = async () => {
//     try {
//         const response = await axios.get('https://busya.kuratnik.by/api/v1/categories');
//         // console.log("Response data:", response.data);
//
//         // Извлекаем все продукты из конкретной категории
//         const allProducts = response.data;
//         console.log(allProducts)
//         return allProducts;
//     } catch (error) {
//         console.error("Ошибка при получении данных:", error);
//         throw error;
//     }
// };

import axios from 'axios';

// Получение всех товаров из всех категорий
export const fetchProducts = async () => {
    try {
        const response = await axios.get('https://busya.kuratnik.by/api/v1/categories');

        // Извлекаем все продукты из всех категорий
        const allProducts = response.data.data.flatMap(category => category.products);
        return allProducts;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw error;
    }
};

// Получение товаров из конкретной категории по ID категории
export const fetchProductsByCategory = async (categoryId) => {
    try {
        const response = await axios.get('https://busya.kuratnik.by/api/v1/categories');

        // Найти нужную категорию по ID
        const category = response.data.data.find(category => category.id === categoryId);

        // Извлечь товары из этой категории
        const categoryProducts = category ? category.products : [];
        return categoryProducts;
    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        throw error;
    }
};
