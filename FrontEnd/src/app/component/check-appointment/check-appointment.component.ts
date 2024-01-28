import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-appointment',
  templateUrl: './check-appointment.component.html',
  styleUrls: ['./check-appointment.component.css']
})
export class CheckAppointmentComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToHome(){
    this.router.navigateByUrl('/home');
  }

}
