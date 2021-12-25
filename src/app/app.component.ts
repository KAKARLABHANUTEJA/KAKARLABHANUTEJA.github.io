import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PaymentsPortal';
  ngOnInit(){}
  form = new FormGroup({
    'Account Id': new FormControl('',[Validators.minLength(10),Validators.required]),
    'Password': new FormControl('',Validators.required),
    'mobileNum': new FormControl('',[Validators.minLength(10),Validators.required]),
    'email': new FormControl('',Validators.email)
  });
  LoginFormSubmition(): void{
    alert('Features under construction');
  }
}
