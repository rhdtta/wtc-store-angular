import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { auth, app } from 'src/app/services/auth.firebase';
import { Product } from 'src/app/store/products/products.action';
import { getDatabase, onValue, ref } from 'firebase/database';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { CartComponent } from '../home-page/navbar/cart/cart.component';
export interface prop {
  id: number,
  keys: Array<string>
}

@Component({
  selector: 'ws-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  itemList: Array<prop> = new Array;
  constructor(private store: Store<{products: Product[]}>,
    private cdr: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit(): void {
    if(auth.currentUser){
      const path= '/'+ auth.currentUser.uid + '/cart'; 
        const database = getDatabase(app);
        const cartRef = ref(database, path);

        for(let i=0; i<50; i++){
          this.itemList[i] = {id: i+1, keys: new Array}
        }

        onValue(cartRef, (snapshot) => {
          let items = snapshot.val();
          for(const property in items){
            if(items[property] > 0){
              this.itemList[items[property]-1].keys.push(property);
            }
          }
        });
    }
  }


}
