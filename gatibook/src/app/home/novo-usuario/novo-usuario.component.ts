import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NovoUsuario } from './novo-usuario';


@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  NovoUsuarioForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService
  ) { }

  ngOnInit(): void {
    this.NovoUsuarioForm = this.formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: [''],
    });
  }

  cadastrar() {
    const novoUsuario = this.NovoUsuarioForm.getRawValue() as NovoUsuario;
    console.log(novoUsuario);
  }
}
