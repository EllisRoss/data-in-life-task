import axios from "axios"

export const productsAPI = {
    getProducts: () => {
        return axios.get('https://datainlife.ru/junior_task/get_products.php')
            .then(response => response.data)
    },
    addProductsToCart: (formData: FormData) => {
        return axios.post('https://datainlife.ru/junior_task/add_basket.php', formData)
            .then(response => response.data)
    },
}