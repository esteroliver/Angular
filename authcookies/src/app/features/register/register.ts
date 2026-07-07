import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Papel } from '../../core/models/usuario';
import { UsuarioService } from '../../core/services/usuario.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './register.html'
})
export class Register {
  private fb = inject(FormBuilder);
  private usuarioService = inject(UsuarioService);
  private router = inject(Router);

  form! : FormGroup;
  papel = Papel;

  estiloBotao = 'bg-blue-300 p-2 rounded-md font-semibold text-blue-800 cursor-pointer transisition transisition-all hover:bg-blue-200';
  estiloSelect = 'border border-gray-300 rounded-md p-1 w-full';
  estiloInput = 'border border-gray-300 rounded-md w-full'

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
