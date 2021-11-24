import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta.model';
import { Medico } from 'src/app/models/medicos.model';
import { ConsultaService } from 'src/app/services/consulta.service';
import { MedicoService } from 'src/app/services/medico.service';


@Component({
  selector: 'app-adicionar-consulta',
  templateUrl: './adicionar-consulta.component.html',
  styleUrls: ['./adicionar-consulta.component.css']
})
export class AdicionarConsultaComponent implements OnInit {

  consultas : Consulta;
  medicos: Medico[];

  constructor(private service: ConsultaService,private servicemed: MedicoService,private router: Router) {
    this.consultas = {} as Consulta;
    this.medicos = [];
   }

  ngOnInit(): void {
    this.servicemed.listar().subscribe(medicos => {
      this.medicos = medicos;
      console.log(this.medicos)
    });
  }

  salvar(consultas : Consulta){
    this.service.salvar(consultas).subscribe(() => {
      console.log('Consulta cadastrada!');
      this.router.navigate(['/consultas']);
    })
  }

}
