import { createAction, props } from "@ngrx/store";
import { Product } from "../../products/products.action";

export interface Currentuser{
    uid: string,
    name: string,
    cart: Array<Product>
}

export const addProductToCart = createAction(
    '[USER STORE] Add Product To Cart',
    props<{product: Product}>()
)

export const loginSuccessful = createAction(
    '[USER STORE] Login Successful',
    props<{user: Currentuser}>()
)
