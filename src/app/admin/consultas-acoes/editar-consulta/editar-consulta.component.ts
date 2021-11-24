import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta.model';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-editar-consulta',
  templateUrl: './editar-consulta.component.html',
  styleUrls: ['./editar-consulta.component.css']
})
export class EditarConsultaComponent implements OnInit {

  consultas : Consulta;

  constructor(private service: ConsultaService, private router: Router, private route: ActivatedRoute) {
    this.consultas = {} as Consulta;
   }

   ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(str)).subscribe( consultas => {
      this.consultas = consultas;
    })
  }

  atualizar(consultas : Consulta){
    this.service.atualizar(consultas).subscribe(() => {
      console.log('Consulta atualizada!');
      this.router.navigate(['/consultas']);
    })
  }

}
