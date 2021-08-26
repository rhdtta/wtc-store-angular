import { createAction, props } from "@ngrx/store";

export interface Product {
    id: number,
    product: string,
    price: number,
    offer_price: number,
    category: string,
    description: string,
    tags: string
}

export interface array {
    payload: Product[]
}


export const addProduct = createAction(
    '[Product Store] Add Product',
    props<{product: Product}>()
)


export const addAllProduct = createAction(
    '[Product Store] Add All Product',
    props<array>()
)

export const loadProduct = createAction(
    '[Product Store] Load Product'
)

