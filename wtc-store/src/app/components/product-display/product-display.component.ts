import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { getDatabase, push, ref } from 'firebase/database';
import { app, auth } from 'src/app/services/auth.firebase';
import { Product } from 'src/app/store/products/products.action';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'ws-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  id: number = 0;
  product: Product = {
    id: 0,
    product: '',
    price: 0,
    offer_price: 0,
    category: '',
    description: '',
    tags: ''
  };

  constructor(private activatedRoute: ActivatedRoute,
    private store: Store<{products: Product[]}>,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let id = paramMap.get('id');
        if(id){
          this.id = Number(id);
        }
        this.store.subscribe(state => {
          this.product = state.products[this.id-1];
        });
      })
  }

  addToCart(id: number){
    if(auth.currentUser){
      const database = getDatabase(app);
      const path= '/'+ auth.currentUser.uid + '/cart'; 
      push(ref(database, path), id);
    }else{
      this.logInIssue();
    }
  }

  logInIssue() {
    this.toastr.info("User Not Logged In", 'Please Log In First');  
  }

}
