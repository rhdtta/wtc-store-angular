import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/store/products/products.action';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ws-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  perPage: number = 20; //Number of products displayed per page
  totalPages: number = 0; //Total Number of pages in pagination
  pageNumbers: Array<number> = [] //Just an array to fill number for pagination
  currentPage: number = 1;
  currentPage$: BehaviorSubject<number> = new BehaviorSubject(1); //A behaviorSubject(i.e., an observable) of current page among the total pages
  currentList: Array<number> = []; //List of indexes of products in current page
  currentProductList: Array<Product> = []; //List of product-objects in current page

  @ViewChild("prev", { static: true }) prev: ElementRef = new ElementRef("li");
  @ViewChild("next", { static: true }) next: ElementRef = new ElementRef("li");

  constructor(private store: Store<{products: Array<Product>}>) { }

  ngOnInit(): void {
    this.store.subscribe(data => {
      this.totalPages = Math.ceil(data.products.length/this.perPage);
      this.fillpageNumbers();
      
      this.currentPage$.subscribe(n => {
        this.currentPage = n;
        this.endCheck();
        this.fillCurrentList(n);
        this.fillCurrentProductList(data.products);
      })
    });
  }

  



  //Event Emitter Function
  changePage(n: number) {
    this.currentPage$.next(n);
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

  fillpageNumbers() {
    for(let i=0; i<this.totalPages; i++) {
      this.pageNumbers.push(i+1);
    }
  }

  nextPage() {
    this.changePage(this.currentPage+1);
  }

  previousPage() {
    this.changePage(this.currentPage-1);
  }

  endCheck() {
    let n = this.currentPage;
    //For prev
    if(n === 1 && n === this.totalPages){
      // console.log('one');
      this.prev.nativeElement.classList.add('disabled');
      this.next.nativeElement.classList.add('disabled');
    }
    else if(n === 1){
      // console.log('two');
      this.prev.nativeElement.classList.add('disabled');
    }else if(n === this.totalPages){
      // console.log('three');
      this.next.nativeElement.classList.add('disabled');
    }
    else{
      // console.log('four');
      this.next.nativeElement.classList.remove('disabled');
      this.prev.nativeElement.classList.remove('disabled');
    }
  }

}
