import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { auth } from 'src/app/services/auth.firebase';
import { onAuthStateChanged } from '@firebase/auth';
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
  loggedIn: boolean = false;
  name: string ='';
  currentUserName: string = '';
  constructor(private store: Store<{navbarOptions: {language: string, currency: string}, currentUser: Currentuser}>) { }

  ngOnInit(): void {
    this.store.subscribe(data => {
      this.currency = data.navbarOptions.currency;
      this.language = data.navbarOptions.language;
    });
    onAuthStateChanged(auth, (user) => {
      if(user){
        this.loggedIn = true;
        this.name = user.displayName? user.displayName : '';
      }else{
        this.loggedIn = false;
        this.name = '';
      }
    })
  }

  onCurrencySubmit(currency: string) {
    this.store.dispatch(changeCurrency({currency}));
  }

  onLanguageSubmit(language: string) {
    this.store.dispatch(changeLanguage({language}));
  }

}
