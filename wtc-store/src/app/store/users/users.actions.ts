import { createAction, props } from "@ngrx/store";
import { Product } from "../products/products.action";


export interface User{
    email_id: string,
    name: string,
    password: string,
    phone_no: string,
    cart: Array<Product>
}



export const addUser = createAction(
    '[USER STORE] Add User',
    props<{user : User}>()
)

export const userLogin = createAction(
    '[USER STORE] Login User',
    props<{user: object}>()
)


