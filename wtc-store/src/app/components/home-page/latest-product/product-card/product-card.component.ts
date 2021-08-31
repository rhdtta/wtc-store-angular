import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { app, auth } from 'src/app/services/auth.firebase';
import { Product } from 'src/app/store/products/products.action';
import { addUser, User } from 'src/app/store/users/users.actions';
import { getDatabase, push, ref, set } from "firebase/database";

export const dummy: User = {email_id: "aa",
name: "roh",
password: "asd",
phone_no: "111",
cart: []}

@Component({
  selector: 'ws-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    product: '',
    price: 0,
    offer_price: 0,
    category: '',
    description: '',
    tags: ''
  };
  random: number = Math.floor(Math.random()*5 + 1);
  
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  addToCart(id: number){
    if(auth.currentUser){
      const database = getDatabase(app);
      const path= '/'+ auth.currentUser.uid + '/cart'; 
      push(ref(database, path), id);
    }
    console.log(auth.currentUser)
    console.log("added")
  }

}

 // const app = initializeApp(firebaseConfig);
  // const db = getDatabase();
  // console.log(db)
  
  // set(ref(db, '/' +'1324'), {
  //   username: ['Hello', 'There', 'My', 'Friend']
    
  // });
