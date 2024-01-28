import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-receive-payment',
  templateUrl: './receive-payment.component.html',
  styleUrls: ['./receive-payment.component.css']
})
export class ReceivePaymentComponent implements OnInit{

  ptId: string = '';
  amount: string = '';
  paymentMethod: string = '';

  constructor(private router: Router ,private http: HttpClient) { }

  ngOnInit(): void {
  }

  save(){
    let bodyData = {
      "ptId": this.ptId,
      "amount": this.amount,
      "paymentMethod": this.paymentMethod,
    };

    this.http.post('http://localhost:5000/api/Payments/id', bodyData).subscribe((resultData: any)=>
    {
      if(resultData.status){
        alert("Payment Received Succefully");
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
