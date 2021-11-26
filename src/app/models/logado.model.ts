import { Usuario } from "./usuario.model";

export class Logado{
    id: number = 0;
    dtaCriacao: string = "";
    nome: string = 'Não cadastrado...';
    email: string = "";
    senha: string = "";
    usuario: Usuario = new Usuario();
  }
  