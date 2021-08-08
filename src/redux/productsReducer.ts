import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionTypes} from "./store";
import {Product} from "../types/types";
import {productsAPI} from "../api/api";

const PRODUCTS_CHANGED = 'data_in_life_task/products/PRODUCTS_CHANGED';

let initialState = {
    products: [] as Product[],
};

const productsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case PRODUCTS_CHANGED:
            return _setProducts(state, action.products);
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

export const productsActions = {
    productsChanged: (products: Product[]) => ({type: PRODUCTS_CHANGED, products} as const),
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