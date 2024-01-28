import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoPrescriptionMaker(){
    this.router.navigateByUrl('/prescription');
  }

  gotoCheckAppointment(){
    this.router.navigateByUrl('/checkAppointment');
  }

  gotoQA(){
    this.router.navigateByUrl('/QA');
  }

  gotoReceivePayment(){
    this.router.navigateByUrl('/payment');
  }

  gotoInputVitals(){
    this.router.navigateByUrl('/vitals');
  }

  gotoCheckHistory(){
    this.router.navigateByUrl('/checkHistory');
  }

  gotoMakeAppointment(){
    this.router.navigateByUrl('/makeAppointment');
  }

  gotoAskQuestion(){
    this.router.navigateByUrl('/askQuestion');
  }

  gotoCheckSerial(){
    this.router.navigateByUrl('/checkSerial');
  }

  gotoHome(){
    this.router.navigateByUrl('/home');
  }

  gotoProfile(){
    this.router.navigateByUrl('/profile');
  }

  gotoEditProfile(){
    this.router.navigateByUrl('/editProfile');
  }

  gotoSettings(){
    this.router.navigateByUrl('/settings');
  }

  signOut(){
    this.router.navigateByUrl('');
  }
}
