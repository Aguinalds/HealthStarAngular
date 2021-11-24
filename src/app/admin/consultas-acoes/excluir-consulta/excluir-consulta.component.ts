import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta.model';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-excluir-consulta',
  templateUrl: './excluir-consulta.component.html',
  styleUrls: ['./excluir-consulta.component.css']
})
export class ExcluirConsultaComponent implements OnInit {

  consultas: Consulta;

  constructor(private service: ConsultaService,
    private router: Router,
    private route: ActivatedRoute) {
      this.consultas = { } as Consulta;
     }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(str)).subscribe( consultas => {
      this.consultas = consultas;
    })
  }

  excluir(consultas: Consulta) {
    this.service.excluir(consultas.id).subscribe(() => {
      console.log('Consulta excluida!');
      this.router.navigate(['/consultas'])
    })
  }

}

