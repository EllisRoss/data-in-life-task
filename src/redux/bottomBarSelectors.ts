import {AppStateType} from "./store";
import {ProductInCart} from "../types/types";

export const selectProductsInCart = (state: AppStateType): ProductInCart[] => {
  return state.bottomBar.productsInCart;
}