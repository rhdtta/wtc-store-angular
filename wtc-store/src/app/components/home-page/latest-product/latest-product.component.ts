import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/store/products/products.action';

@Component({
  selector: 'ws-latest-product',
  templateUrl: './latest-product.component.html',
  styleUrls: ['./latest-product.component.css']
})
export class LatestProductComponent implements OnInit {
  randomNum: Array<number> = new Array(12);
  productList: Array<Product> = [];

  constructor(private store: Store<{products: Product[]}>) { }
  
  ngOnInit(): void {
    this.randomNum = randomNumFiller(12);
    this.store.subscribe(data => {
      this.randomNum.forEach((x,i) => this.productList[i] = data.products[x]);
    });
  }
  
}

function randomNumFiller(x: number): Array<number> {
  let randomNum = new Array(x);
  for(let i=0; i<x; i++){
    randomNum[i] = Math.floor(Math.random()*49 +1);
  }
  return randomNum;
}
