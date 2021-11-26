import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta.model';
import { Remedio } from '../models/remedio.model';
import { ConsultaService } from '../services/consulta.service';
import { RemedioService } from '../services/remedio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  consultas: Consulta[];
  displayedColumnsCon: string[] = ['data','time'];

  remedios: Remedio[];
  displayedColumnsRem: string[] = [ 'nome', 'ciclo',];

  constructor(private servicecon: ConsultaService,private servicerem : RemedioService) {
    this.consultas = [];
    this.remedios = [];
  }

  ngOnInit(): void {
    this.servicecon.listar().subscribe(consultas => {
      this.consultas = consultas;
      console.log(this.consultas)
    });
    this.servicerem.listar().subscribe( remedios => {
      this.remedios = remedios;
      console.log(this.remedios)
    });
  }
  
}