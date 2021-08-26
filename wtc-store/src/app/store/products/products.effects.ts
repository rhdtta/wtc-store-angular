import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, tap, mergeMap, catchError } from "rxjs/operators";
import { productList } from "src/app/services/productList.service";
import { EMPTY } from "rxjs";

@Injectable()
export class productListEffects {
    loadProducts$ = createEffect(() => this.actions$
        .pipe(
            ofType('[Product Store] Load Product'),
            mergeMap(() => this.productList.get()
                .pipe(
                    map(product => ({ type: '[Product Store] Add All Product', payload: product})),
                    catchError(() => EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private productList: productList) {}
}