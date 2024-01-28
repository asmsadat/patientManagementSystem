import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoHome(){
    this.router.navigateByUrl('/home');
  }

  gotoProfile(){
    this.router.navigateByUrl('/profile');
  }

  gotoSettings(){
    this.router.navigateByUrl('/settings');
  }

  signOut(){
    this.router.navigateByUrl('');
  }

  gotoEditProfile(){
    this.router.navigateByUrl('/editProfile');
  }
}
