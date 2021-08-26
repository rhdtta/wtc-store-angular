import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from './store/products/products.action';
import { loadProduct } from './store/products/products.action';

@Component({
  selector: 'ws-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wtc-store';
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadProduct());
  }

}
