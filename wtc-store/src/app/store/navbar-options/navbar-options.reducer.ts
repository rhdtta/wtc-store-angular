
import { createReducer, Action, on } from "@ngrx/store";
import { changeCurrency, changeLanguage } from "./navbar-options.actions";

export interface state {
    language: string,
    currency: string
}

export const initialState: state = {
    language: 'English',
    currency: 'USD'
}

export const navbarOptionReducer = createReducer(
    initialState,
    on(changeLanguage, (state, {language}) => ({...state, language: language})),
    on(changeCurrency, (state, {currency}) => ({...state, currency: currency}))
);
