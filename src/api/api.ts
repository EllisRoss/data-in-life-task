import axios from "axios"

export const productsAPI = {
    getProducts: () => {
        return axios.get('https://datainlife.ru/junior_task/get_products.php')
            .then(response => response.data)
    }
}