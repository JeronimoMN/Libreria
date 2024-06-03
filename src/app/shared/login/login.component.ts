import { CommonModule } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  get user (){
    return this.loginForm.get('username') as FormControl
  }

  get pass (){
    return this.loginForm.get('password') as FormControl
  }

  loginForm = new FormGroup({
    'username': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  validateUser(){
    console.log(this.loginForm.value)
  }


}
