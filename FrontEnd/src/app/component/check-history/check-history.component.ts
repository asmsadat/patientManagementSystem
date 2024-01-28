import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-history',
  templateUrl: './check-history.component.html',
  styleUrls: ['./check-history.component.css']
})
export class CheckHistoryComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToHome(){
    this.router.navigateByUrl('/home');
  }

}
