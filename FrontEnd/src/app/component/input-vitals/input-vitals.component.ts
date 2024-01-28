import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-input-vitals',
  templateUrl: './input-vitals.component.html',
  styleUrls: ['./input-vitals.component.css']
})

export class InputVitalsComponent implements OnInit{
  ptID: string = '';
  weight: string = '';
  bp: string = '';
  pulse: string = '';
  oxygenSaturation: string = '';

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
  }

  save(){
    let bodyData = {
      "ptID": this.ptID,
      "weight": this.weight,
      "bp": this.bp,
      "pulse": this.pulse,
      "oxygenSaturation": this.oxygenSaturation,
    };

    this.http.post('http://localhost:5000/api/input_vital/vital', bodyData).subscribe((resultData: any)=>
    {
      if(resultData.status){
        alert("Vitals Saved Succefully");
        this.router.navigateByUrl('/home');
      }
      else{
        alert("Something wrong... Please try again!");
        console.log("Something wrong... Please try again!");
      }
    });
  }

  gotoHome(){
    this.router.navigateByUrl('/home');
  }

}
