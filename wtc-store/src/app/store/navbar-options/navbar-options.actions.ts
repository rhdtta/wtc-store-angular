import { createAction, props } from "@ngrx/store";

export interface Product {
    id: number,
    product: string,
    price: number,
    category: string,
    description: string,
    tags: string[]
}


export const changeLanguage = createAction(
    '[Navbar Language] Change Language',
    props<{ language: string}>()
);

export const changeCurrency = createAction(
    '[Navbar Currency] Change Currency',
    props<{ currency: string}>()
)