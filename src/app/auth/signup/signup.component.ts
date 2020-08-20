import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private authService : AuthService) { }
  ngOnInit() {
  }
  onSignUp(formInput : NgForm){
    console.log(formInput.value.emailid +"  ~~~ "+   formInput.value.password) ;
    this.authService.signupUser(formInput.value.emailid , formInput.value.password)
  }
}
