import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})
export class QaComponent implements OnInit{

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backToHome(){
    this.router.navigateByUrl('/home');
  }
}
