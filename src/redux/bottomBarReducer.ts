import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionTypes} from "./store";
import {ProductInCart} from "../types/types";
import {productsAPI} from "../api/api";

const PRODUCT_ADDED = 'data_in_life_task/bottom_bar/PRODUCT_ADDED';
const PRODUCTS_DELETED = 'data_in_life_task/bottom_bar/PRODUCTS_DELETED';

let initialState = {
    productsInCart: [] as ProductInCart[],
};

const bottomBarReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case PRODUCT_ADDED:
            return _addProduct(state, action.newProduct);
        case PRODUCTS_DELETED:
            return _deleteProduct(state, action.id);
        default:
            return state;
    }
}

const _addProduct = (state: InitialStateType, newProduct: ProductInCart): InitialStateType => {
    const filtered = state.productsInCart.filter(product => product.id !== newProduct.id)

    return {
        ...state,
        productsInCart: [...filtered, newProduct],
    }
}
const _deleteProduct = (state: InitialStateType, id: string): InitialStateType => {
    const filtered = state.productsInCart.filter(product => product.id !== id)

    return {
        ...state,
        productsInCart: [...filtered],
    }
}

export const productsInCartActions = {
    productAdded: (newProduct: ProductInCart) => ({type: PRODUCT_ADDED, newProduct} as const),
    productDeleted: (id: string) => ({type: PRODUCTS_DELETED, id} as const),
}

export const addProductsToCart = (formData: FormData): ThunkType =>
    async (dispatch) => {
        const payload = await productsAPI.addProductsToCart(formData);
        console.log(payload);
    }
export default bottomBarReducer;

type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof productsInCartActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;