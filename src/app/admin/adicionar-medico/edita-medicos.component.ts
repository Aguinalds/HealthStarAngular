import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from 'src/app/models/medicos.model';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-edita-medicos',
  templateUrl: './edita-medicos.component.html',
  styleUrls: ['./edita-medicos.component.css']
})
export class EditaMedicosComponent implements OnInit {

  medicos: Medico;
  constructor(private service: MedicoService,
    private router: Router,
    private route: ActivatedRoute) {
    this.medicos = {} as Medico;
  }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(str)).subscribe( medicos => {
      this.medicos = medicos;
    })
  }

  atualizar(medicos: Medico) {
    this.service.atualizar(medicos).subscribe(() => {
      console.log('Medico atualizado!');
      this.router.navigate(['/medicos'])
    })
  }

}

