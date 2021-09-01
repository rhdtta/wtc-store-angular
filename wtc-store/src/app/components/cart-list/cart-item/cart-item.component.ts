import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getDatabase, onValue, ref, set } from 'firebase/database';
import { child } from 'firebase/database';
import { app, auth } from 'src/app/services/auth.firebase';
import { Product } from 'src/app/store/products/products.action';
import { prop } from '../cart-list.component';

@Component({
  selector: 'ws-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() prop: prop ={
    id: 0,
    keys: []
  }

  product: Product = {
    id: 0,
    product: 'string',
    price: 0,
    offer_price: 0,
    category: 'string',
    description: 'string',
    tags: 'string'
};
  itemCount: number = 0;
  totalAmount: number=0;

  constructor(private store: Store<{products: Product[]}>,
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.store.subscribe(data => {
      this.product = data.products[this.prop.id-1];
    })
    this.itemCount = this.prop.keys.length;
  }

  delete(key_: string){
    if(auth.currentUser){
      const path= '/'+ auth.currentUser.uid + '/cart'; 
        const database = getDatabase(app);
        const cartRef = ref(database, path);
        const objectRef = child(cartRef, key_);
        set(objectRef, null);
        this.itemCount--;
        this.prop.keys.shift();

        // onValue(cartRef, () => {
        //   this.cdr.detectChanges();
        // });
    }
  }

}
