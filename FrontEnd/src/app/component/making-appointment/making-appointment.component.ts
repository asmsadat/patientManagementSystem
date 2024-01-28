import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-making-appointment',
  templateUrl: './making-appointment.component.html',
  styleUrls: ['./making-appointment.component.css']
})
export class MakingAppointmentComponent implements OnInit{

  date: string = '';
  time: string = '';

  constructor(private router: Router ,private http: HttpClient) { }

  ngOnInit(): void {
  }

  getAppointment(){
    let bodyData = {
      "date": this.date,
      "time": this.time,
    };

    this.http.post('http://localhost:5000/api/Appointment/id', bodyData).subscribe((resultData: any)=>
    {
      if(resultData.status){
        alert("Appointment Succefully Made");
        this.router.navigateByUrl('/home');
      }
      else{
        alert("Something worng... Please try again!");
        console.log("Something worng... Please try again!");
      }
    });
  }

  gotoHome(){
    this.router.navigateByUrl('/home');
  }
}
