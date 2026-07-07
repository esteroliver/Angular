import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html'
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  form! : FormGroup;

  estiloBotao = 'bg-blue-300 p-2 rounded-md font-semibold text-blue-800 cursor-pointer transisition transisition-all hover:bg-blue-200';
  estiloInput = 'border border-gray-300 rounded-md w-full'

  ngOnInit(){
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(8)]]
    });
  }

  submit(){
    if(this.form.valid){
      this.authService.login(this.form.value).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        }
      })
    }
  }

}
