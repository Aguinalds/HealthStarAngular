import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta.model';
import { ConsultaService } from '../services/consulta.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  consultas: Consulta[];
  displayedColumns: string[] = ['medico', 'data', 'valor'];

  constructor(private service: ConsultaService) {
    this.consultas = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe(consultas => {
      this.consultas = consultas;
      console.log(this.consultas)
    });
  }
}
