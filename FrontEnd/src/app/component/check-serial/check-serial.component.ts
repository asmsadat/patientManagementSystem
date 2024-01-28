import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-serial',
  templateUrl: './check-serial.component.html',
  styleUrls: ['./check-serial.component.css']
})
export class CheckSerialComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoHome(){
    this.router.navigateByUrl('/home');
  }

}
