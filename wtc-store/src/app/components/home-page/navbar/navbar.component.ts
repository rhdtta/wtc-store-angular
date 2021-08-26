import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeCurrency, changeLanguage } from 'src/app/store/navbar-options/navbar-options.actions';

@Component({
  selector: 'ws-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currency: string = '';
  language: string = '';

  constructor(private store: Store<{navbarOptions: {language: string, currency: string}}>) { }

  ngOnInit(): void {
    this.store.subscribe(options => {
      this.currency = options.navbarOptions.currency;
      this.language = options.navbarOptions.language;
    })
  }

  onCurrencySubmit(currency: string) {
    this.store.dispatch(changeCurrency({currency}));
  }

  onLanguageSubmit(language: string) {
    this.store.dispatch(changeLanguage({language}));
  }

}
