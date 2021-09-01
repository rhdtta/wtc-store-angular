import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/store/products/products.action';

@Component({
  selector: 'ws-latest-product',
  templateUrl: './latest-product.component.html',
  styleUrls: ['./latest-product.component.css']
})
export class LatestProductComponent implements OnInit {
  totalItems: number = 12;
  totalPages: number = 0;
  perPage: number = 5; //Number of products displayed per page
  randomNum: Array<number> = new Array(this.perPage);
  productList: Array<Product> = []; //Randomly Selecting #totalItems number of items from Main Product List
  currentList: Array<number> = []; //List of indexes of products in current page
  currentProductList: Array<Product> = []; //List of product-objects in current page
  currentPage: number = 1;
  currentPage$: BehaviorSubject<number> = new BehaviorSubject(1); //A behaviorSubject(i.e., an observable) of current page among the total pages

  constructor(private store: Store<{products: Product[]}>) { }
  
  ngOnInit(): void {
    this.store.subscribe(data => {
      this.randomNum = randomNumFiller(this.totalItems);
      this.totalPages = Math.ceil(data.products.length/this.perPage);
      this.store.subscribe(data => {
      this.randomNum.forEach((x,i) => this.productList[i] = data.products[x]);
    });

    this.currentPage$.subscribe(n => {
      this.currentPage = n;
      this.fillCurrentList(n);
      this.fillCurrentProductList(data.products);
      this.endCheck();
    })});
  }


  fillCurrentList(n: number) {
    for(let i=0; i<this.perPage; i++){
      this.currentList[i] = i + ((n-1)*this.perPage);
    };
  }

  fillCurrentProductList(data: Array<Product>) {
    this.currentProductList = [];
    for(let i=0; i<this.currentList.length; i++){
      if(data[this.currentList[i]] !== undefined){
        this.currentProductList.push(data[this.currentList[i]]);
      }
    }
  }

  endCheck() {
    if(this.currentPage === 1){
      
    }
  }
}

function randomNumFiller(x: number): Array<number> {
  let randomNum = new Array(x);
  for(let i=0; i<x; i++){
    randomNum[i] = Math.floor(Math.random()*49 +1);
  }
  return randomNum;
}


