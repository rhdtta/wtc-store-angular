import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut  } from 'firebase/auth';
import { auth } from 'src/app/services/auth.firebase';
import { Router } from '@angular/router';

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
  
  ngOnInit(): void {}

  onSubmit() {
    signInWithEmailAndPassword(auth, this.loginDetails.email_id, this.loginDetails.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.router.navigate(['/home'])
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

// {
//   "rules": {
//     ".read": "now < 1632940200000",  // 2021-9-30
//     ".write": "now < 1632940200000",  // 2021-9-30
//   }
// }
