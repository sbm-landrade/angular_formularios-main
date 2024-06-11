import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  constructor(private HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario) {
    return this.HttpClient.post('http://localhost:3000/user/signup', novoUsuario);
  }
}
