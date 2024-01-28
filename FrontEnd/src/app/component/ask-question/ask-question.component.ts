import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent implements OnInit{

  catagory: string = '';
  question: string = '';

  constructor(private router: Router ,private http: HttpClient) { }

  ngOnInit(): void {
  }

  addQuestion(){
    let bodyData = {
      "catagory": this.catagory,
      "question": this.question
    }

    this.http.post('http://localhost:5000/', bodyData).subscribe((resultData: any)=>
    {
      alert("Question Added Successfully");
      this.router.navigateByUrl('/home');
    })
  }

  gotoHome(){
    this.router.navigateByUrl('/home');
  }
}
