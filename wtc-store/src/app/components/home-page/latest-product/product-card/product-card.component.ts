import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/store/products/products.action';

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
  constructor() { }

  ngOnInit(): void {
    console.log('random', this.random)
  }

}
