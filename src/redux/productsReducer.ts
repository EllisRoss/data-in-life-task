import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionTypes} from "./store";
import {Product} from "../types/types";
import {productsAPI} from "../api/api";

const PRODUCTS_CHANGED = 'data_in_life_task/products/PRODUCTS_CHANGED';
const PRODUCT_FOLDER_CHANGED = 'data_in_life_task/products/PRODUCT_FOLDER_CHANGED';

let initialState = {
    products: [] as Product[],
    productFolder: null as null | Product,
};

const productsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case PRODUCTS_CHANGED:
            return _setProducts(state, action.products);
        case PRODUCT_FOLDER_CHANGED:
            return _setProductFolder(state, action.newProduct);
        default:
            return state;
    }
}

const _setProducts = (state: InitialStateType, products: Product[]): InitialStateType => {
    return {
        ...state,
        products: [...products],
    }
}

const _setProductFolder = (state: InitialStateType, newProduct: Product): InitialStateType => {
    return {
        ...state,
        productFolder: newProduct,
    }
}

export const productsActions = {
    productsChanged: (products: Product[]) => ({type: PRODUCTS_CHANGED, products} as const),
    productFolderChanged: (newProduct: Product) => ({type: PRODUCT_FOLDER_CHANGED, newProduct} as const),
}

export const getProducts = (): ThunkType =>
    async (dispatch) => {
        const products: Product[] = await productsAPI.getProducts();
        dispatch(productsActions.productsChanged(products));
    }
export default productsReducer;

type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof productsActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;