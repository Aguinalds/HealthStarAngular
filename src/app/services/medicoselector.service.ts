import { Injectable } from '@angular/core';
import { Medico } from '../models/medicos.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoselectorService {

  mediconomes: Medico[];

  constructor() {
    this.mediconomes = [];
   }

   adicionarMedico(medico:Medico){
     this.mediconomes.push(medico)
   }
   listarMedico(){
    return this.mediconomes;
   }
   limparMedico(){
     this.mediconomes = [];
     return this.mediconomes;
   }
}
