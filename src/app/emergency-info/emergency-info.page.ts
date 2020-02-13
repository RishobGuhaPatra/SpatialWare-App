import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";



@Component({
  selector: 'app-emergency-info',
  templateUrl: './emergency-info.page.html',
  styleUrls: ['./emergency-info.page.scss'],
})
export class EmergencyInfoPage implements OnInit {
  
  ionicForm: FormGroup;
  isSubmitted = false;
  
  constructor(public formBuilder: FormBuilder) {
    
   
  }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      contactName: ['', [Validators.required, Validators.minLength(2)]],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
   })
  }
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all required values!');
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
  }
  get errorControl() {
     return this.ionicForm.controls;
  }
}
