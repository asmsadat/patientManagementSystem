import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prescription-maker',
  templateUrl: './prescription-maker.component.html',
  styleUrls: ['./prescription-maker.component.css']
})
export class PrescriptionMakerComponent implements OnInit {
  complain: string = '';
  testName: string = '';
  medicineName: string = '';
  morning: string = '';
  noon: string = '';
  night: string = '';
  amount: string = '';

  showForm = true;

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
  }

  gotoHistory(){
    this.router.navigateByUrl('/checkHistory');
  }

  save(){
    let bodyData = {
      complain: this.complain,
      testName: this.testName,
      medicineName: this.medicineName,
      morning: this.morning,
      noon: this.noon,
      night: this.night,
      amount: this.amount,
    };

    this.http.post('http://localhost:5000/api/Prescription/id', bodyData).subscribe((result: any)=>
    {
      alert("Prescription Saved Succefully");
      this.router.navigateByUrl('/home');
    });
  }

  form: FormGroup = this.formBuilder.group({
    patientComplain: this.formBuilder.array([
      this.formBuilder.group({
        complain: [''],
      })
    ]),
    test: this.formBuilder.array([
      this.formBuilder.group({
        testName: [''],
      })
    ]),
    medicine: this.formBuilder.array([
      this.formBuilder.group({
        medicineName: [''],
        morning: [''],
        noon: [''],
        night: [''],
        amount: [''],
      })
    ]),
  });

  get patientComplain(){
    return this.form.get('patientComplain') as FormArray;
  }

  get test(){
    return this.form.get('test') as FormArray;
  }

  get medicine(){
    return this.form.get('medicine') as FormArray;
  }

  addComplain(){
    this.patientComplain.push(
      this.formBuilder.group({
        complain: [''],
      })
    )
  }

  deleteComplain(i: number){
    this.patientComplain.removeAt(i);
  }

  addTest(){
    this.test.push(
      this.formBuilder.group({
        testName: [''],
      })
    )
  }

  deleteTest(i: number){
    this.test.removeAt(i);
  }

  addMedicine(){
    this.medicine.push(
      this.formBuilder.group({
        medicineName: [''],
        morning: [''],
        noon: [''],
        night: [''],
        amount: [''],
      })
    )
  }

  deleteMedicine(i: number){
    this.medicine.removeAt(i);
  }

}
