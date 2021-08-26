import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/store/products/products.action';

@Component({
  selector: 'ws-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  perPage: number = 20;
  totalPages: number = 0;
  currentPage: number = 1;
  currentList: Array<number> = [];
  currentProductList: Array<Product> = [];
  constructor(private store: Store<{products: Array<Product>}>) { }

  ngOnInit(): void {
    this.store.subscribe(data => {
      this.totalPages = Math.ceil(data.products.length/this.perPage);
      this.fillCurrentList();
      this.fillCurrentProductList(data.products);
      console.log('currentList', this.currentList);
      console.log('totalPage', this.totalPages);
      console.log('currentPage', this.currentPage);
      console.log('currentProductList', this.currentProductList);
    });
    
  }

  changePage(x: number){
    this.currentPage = x;
  }

  fillCurrentList() {
    for(let i=0; i<this.perPage; i++){
      this.currentList[i] = i + ((this.currentPage-1)*this.perPage);
    }
  }

  fillCurrentProductList(data: Array<Product>) {
    for(let i=0; i<this.currentList.length; i++){
      this.currentProductList[i] = data[this.currentList[i]];
    }
  }
}
