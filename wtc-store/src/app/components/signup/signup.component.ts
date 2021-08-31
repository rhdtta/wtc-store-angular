import { getDatabase, ref, set } from "firebase/database";
import { Component, OnInit } from '@angular/core';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { loginDetails } from '../login/login.component';
import { auth } from "src/app/services/auth.firebase";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { loginSuccessful } from "src/app/store/users/currentUser/currentUser.action";

export interface signupDetails {
  name: string,
  email_id: string,
  password: string
}

@Component({
  selector: 'ws-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupDetails: signupDetails = {
    name: '',
    email_id: '',
    password: ''
  };
  constructor(private route: Router,
    private store: Store) { }

  ngOnInit(): void {}

  onSubmit() {
    createUserWithEmailAndPassword(auth, this.signupDetails.email_id, this.signupDetails.password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName: this.signupDetails.name
        })
        this.route.navigate(['/home']);
      })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
    });
    if(auth.currentUser){
      this.store.dispatch(loginSuccessful(
        {user: {
        uid: auth.currentUser.uid,
        name: auth.currentUser.displayName? auth.currentUser.displayName : '',
        cart: []}
        })
      );
    }
  }
}


