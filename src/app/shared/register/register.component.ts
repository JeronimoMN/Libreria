import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  get name (){
    return this.registerForm.get('name') as FormControl
  }

  get password (){
    return this.registerForm.get('password') as FormControl
  }

  get birthdate (){
    return this.registerForm.get('birthdate') as FormControl
  }

  get email (){
    return this.registerForm.get('email') as FormControl
  }

  registerForm = new FormGroup({
    'name' : new FormControl('', [Validators.required]),
    'password' : new FormControl('', [Validators.required, Validators.minLength(6)]),
    'birthdate' : new FormControl('', [Validators.required]),
    'email' : new FormControl('', [Validators.required, Validators.email])
  })



  onSubmit(){
    console.log(this.registerForm.value)
  }
}
