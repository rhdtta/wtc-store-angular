import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged } from '@firebase/auth';
import { Store } from '@ngrx/store';
import { getDatabase, onValue, ref } from 'firebase/database';
import { auth, app } from 'src/app/services/auth.firebase';
import { Product } from 'src/app/store/products/products.action';
@Component({
  selector: 'ws-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalAmount: number = 0;
  itemCount: number = 0;
  constructor(private store: Store<{products: Product[]}>) { }

  ngOnInit(): void {
    onAuthStateChanged(auth, () => {
      if(auth.currentUser){
        const path= '/'+ auth.currentUser.uid + '/cart'; 
        const database = getDatabase(app);
        const cartRef = ref(database, path);
        onValue(cartRef, (snapshot) => {
          this.itemCount = Object.keys(snapshot.val()).length - 1;
          this.totalAmount = 0;
          Object.values(snapshot.val()).forEach(x => {
            if(x as number >0){
              this.store.subscribe(data => {
                this.totalAmount += data.products[x as number - 1].offer_price as number;
              }) 
            }
          })
        });
      }
    })
  }
}