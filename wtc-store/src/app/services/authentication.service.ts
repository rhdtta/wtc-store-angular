
import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../store/products/products.action";
import { of } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class productList{
    get() {
        return of();
    }   
}