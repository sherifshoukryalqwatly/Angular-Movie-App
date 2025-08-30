import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [Footer,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  loginForm: FormGroup
  constructor(private router:Router,private fb: FormBuilder){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit(){
    if (this.loginForm.valid) {
      console.log('Form Submitted:', this.loginForm.value);
      this.router.navigate(['/home'])
      // 👉 Call your API service here
    } else {
      console.log('Form Invalid ❌');
      this.loginForm.markAllAsTouched();
    }
  }
}
