import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit{

  name: string = '';
  email: string = '';
  phoneNo: string = '';
  gender: string = '';
  profession: string = '';

  constructor(private router: Router ,private http: HttpClient) { }

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

  save(){
    let bodyData = {
      "name": this.name,
      "email": this.email,
      "phoneNo": this.phoneNo,
      "gender": this.gender,
      "profession": this.profession
    }

    this.http.post('http://localhost:5000/', bodyData).subscribe((resultData: any)=>
    {
      alert("Settings Saved Successfully!");
      this.router.navigateByUrl('/settings');
    });
  }

}
