import {AppStateType} from "./store";
import {Product} from "../types/types";

export const selectProducts = (state: AppStateType): Product[] => {
  return state.productsPage.products;
}