import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericCrudService } from './generic.crud.service';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericCrudService<Usuario>  {

  constructor(protected http: HttpClient) {
    super(http, "http://localhost:3000/usuarios");
  }
}
