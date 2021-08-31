import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeCurrency, changeLanguage } from 'src/app/store/navbar-options/navbar-options.actions';
import { Currentuser } from 'src/app/store/users/currentUser/currentUser.action';

@Component({
  selector: 'ws-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currency: string = '';
  language: string = '';
  name: string ='';

  loggedIn: boolean = false;
  currentUserName: string = '';
  constructor(private store: Store<{navbarOptions: {language: string, currency: string}, currentUser: Currentuser}>) { }

  ngOnInit(): void {
    // this.checkAuth();
    this.store.subscribe(data => {
      this.currency = data.navbarOptions.currency;
      this.language = data.navbarOptions.language;
      // this.checkAuth(data.currentUser);
    })
  }

  onCurrencySubmit(currency: string) {
    this.store.dispatch(changeCurrency({currency}));
  }

  onLanguageSubmit(language: string) {
    this.store.dispatch(changeLanguage({language}));
  }

  

  // checkAuth(user: Currentuser) {
  //   if(uid){
  //     this.loggedIn = true;
  //     this.name = user.name;
  //   }else{
  //     this.loggedIn = false;
  //   }
  // }

}
