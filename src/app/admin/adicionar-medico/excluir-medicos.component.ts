import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from 'src/app/models/medicos.model';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-excluir-medicos',
  templateUrl: './excluir-medicos.component.html',
  styleUrls: ['./excluir-medicos.component.css']
})
export class ExcluirMedicosComponent implements OnInit {

  medicos: Medico;

  constructor(private service: MedicoService,
    private router: Router,
    private route: ActivatedRoute) {
      this.medicos = { } as Medico;
     }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(str)).subscribe( medicos => {
      this.medicos = medicos;
    })
  }

  excluir(medicos: Medico) {
    this.service.excluir(medicos.id).subscribe(() => {
      console.log('Medico excluido!');
      this.router.navigate(['/medicos'])
    })
  }

}
