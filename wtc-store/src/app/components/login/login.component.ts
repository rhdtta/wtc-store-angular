import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { userLogin } from 'src/app/store/users/users.actions';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut  } from 'firebase/auth';
import { auth } from 'src/app/services/auth.firebase';
import { Router } from '@angular/router';
import { loginSuccessful } from 'src/app/store/users/currentUser/currentUser.action';

export interface loginDetails {
  email_id: string,
  password: string
}

@Component({
  selector: 'ws-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginDetails: loginDetails = {
    email_id: '',
    password: ''
  };
  hello: string ='hello';
  constructor(private store: Store,
    private router: Router) { }
  
  ngOnInit(): void {
    auth.onAuthStateChanged(user => {
      console.log(user);
    })
  }

  onSubmit() {
    signInWithEmailAndPassword(auth, this.loginDetails.email_id, this.loginDetails.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.router.navigate(['/home']);
        this.store.dispatch(loginSuccessful(
          {user: {
          uid: user.uid,
          name: user.displayName? user.displayName : '',
          cart: []
          }})
        );
      })
      .catch((error) => {

        console.log(error.message)
      })
  }
}
    // signOut(auth).then(() => console.log(auth))
    // this.router.navigate(['/others']);
    // createUserWithEmailAndPassword(getAuth(initializeApp(firebaseConfig)), this.loginDetails.email_id, this.loginDetails.password)
    //   .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     console.log('signed in', userCredential)
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorMessage)
    //     // ..
    //   });
    
  // const app = initializeApp(firebaseConfig);
  // const db = getDatabase();
  // console.log(db)
  
  // set(ref(db, '/' +'1324'), {
  //   username: ['Hello', 'There', 'My', 'Friend']
    
  // });



// {
//   "rules": {
//       "$uid": {
//         // Allow only authenticated content owners access to their data
//         ".read": "auth != null && auth.uid == $uid",
//         ".write": "auth != null && auth.uid == $uid"
//       }
//     }
// }