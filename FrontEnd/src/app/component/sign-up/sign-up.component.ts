import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    let bodyData = {
      "name": this.name,
      "email": this.email,
      "password": this.password,
    };

    this.http.post('http://localhost:5000/api/auth/register', bodyData).subscribe((result: any)=>
    {
      console.log(result);
      alert("Sign Up Succefully");
      this.router.navigateByUrl('/login');
    });
  }

  gotoSignin(){
    this.router.navigateByUrl('/signin');
  }
}
