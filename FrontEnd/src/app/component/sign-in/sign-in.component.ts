import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  email: string = '';
  password: string = '';

  isLogin: boolean = true;
  errorMessage: string = '';

  constructor(private router: Router ,private http: HttpClient) { }

  ngOnInit(): void {
  }

  signIn() {
    let bodyData={
      "email": this.email,
      "password": this.password,
    };

    this.http.post('http://localhost:5000/api/auth/login', bodyData).subscribe((resultData: any)=>
    {
      if(resultData.status){
        this.router.navigateByUrl('/home');
      }
      else{
        alert("Incorrect Email or Password");
        console.log("Incorrect Email or Password");
      }
    });
  }

  gotoSignup(){
    this.router.navigateByUrl('/signup');
  }
}
