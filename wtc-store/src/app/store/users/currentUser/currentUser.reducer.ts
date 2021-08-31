import { createReducer, on, props } from "@ngrx/store";
import { Currentuser } from "./currentUser.action";
import { addProductToCart, loginSuccessful } from "./currentUser.action";

export const initialState: Currentuser = {
    uid: '',
    name: '',
    cart: []
};

export const currentUserReducer = createReducer(
    initialState,
    on(addProductToCart, (state, product) => {
        state.cart.push(product.product);
        return state;
    }),
    on(loginSuccessful, (state, user) => {
        state = {...state, uid: user.user.uid, name: user.user.name}
        return state;
    })
)