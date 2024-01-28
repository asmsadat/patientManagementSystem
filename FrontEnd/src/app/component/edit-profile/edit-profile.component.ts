import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit{

  dateOfBirth: string = '';
  bloodGroup: string = '';
  height: string = '';
  weight: string = '';

  constructor(private router: Router ,private http: HttpClient) { }

  ngOnInit(): void {
  }

  save(){
    let bodyData = {
      "dateOfBirth": this.dateOfBirth,
      "bloodGroup": this.bloodGroup,
      "height": this.height,
      "weight": this.weight
    }

    this.http.post('http://localhost:5000/login', bodyData).subscribe((resultData: any)=>
    {
      alert("Profile Edited Successfully!");
      this.router.navigateByUrl('/profile');
    });

  }
}
