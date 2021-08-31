import { Component, OnInit } from '@angular/core';
import { auth } from 'src/app/services/auth.firebase';

@Component({
  selector: 'ws-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    auth.signOut()
  }

}

