import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta.model';
import { Medico } from 'src/app/models/medicos.model';
import { ConsultaService } from 'src/app/services/consulta.service';
import { MedicoService } from 'src/app/services/medico.service';
import { MedicoselectorService } from 'src/app/services/medicoselector.service';

@Component({
  selector: 'app-adicionar-consulta',
  templateUrl: './adicionar-consulta.component.html',
  styleUrls: ['./adicionar-consulta.component.css']
})
export class AdicionarConsultaComponent implements OnInit {

  nomesmed: Medico[];
  consultas : Consulta;
  medicos: Medico[];
  displayedColumns: string[] = ['nome', 'especialidade', 'adicionar'];

  constructor(private service: ConsultaService,private servicemed: MedicoService,private router: Router, private medicoseletor: MedicoselectorService) {
    this.consultas = {} as Consulta;
    this.medicos = [];
    this.nomesmed = medicoseletor.mediconomes;
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
