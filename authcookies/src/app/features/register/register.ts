import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { Papel } from '../../core/models/usuario';
import { UsuarioService } from '../../core/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private fb = inject(FormBuilder);
  private usuarioService = inject(UsuarioService);
  private router = inject(Router);

  form! : FormGroup;
  papel = Papel;

  ngOnInit(){
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      nome: [null, [Validators.required]],
      senha: [null, [Validators.required, Validators.minLength(8)]],
      papel: [null, [Validators.required]]
    });
  }

  submit(){
    if(this.form.valid){
      this.usuarioService.register(this.form.value).subscribe({
        next: () => {
          this.router.navigate(['login']);
        }
      });
    }
  }

}
