import { Component, OnInit } from '@angular/core';
import { Medico } from '../models/medicos.model';
import { MedicoService } from '../services/medico.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.css']
})
export class MedicosComponent implements OnInit {

  medicos: Medico[];
  displayedColumns: string[] = ['nome', 'especialidade', 'acoes'];
 

  constructor(private service : MedicoService) {
    this.medicos = [];
   }

  ngOnInit(): void {
    this.service.listar().subscribe( medicos => {
      this.medicos = medicos;
      console.log(this.medicos)
    });
  }

}
