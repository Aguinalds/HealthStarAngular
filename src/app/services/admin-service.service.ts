import { Injectable } from '@angular/core';
import { Remedio } from  '../models/remedio.model'; 

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  itens: Remedio[];


  constructor() {
    this.itens = [];
   } 

  adicionarAoSistema(remedio: Remedio){
    this.itens.push(remedio);
  }

  listarItens(){
    return this.itens;
  }
  limparSistema(){
    this.itens = []
    return this.itens;
  }
}
