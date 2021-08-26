import { createReducer, on, Action } from "@ngrx/store";
import { addAllProduct } from "./products.action";
import { Product } from "./products.action";
import { array } from "./products.action";

export const initialState: Product[] = [];

export const productsReducer = createReducer(
    initialState,
    on(addAllProduct, (state, product) => {
        state = product.payload
        return state;
    })
)