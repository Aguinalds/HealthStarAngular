import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/models/medicos.model';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-adicionar-medico',
  templateUrl: './adicionar-medico.component.html',
  styleUrls: ['./adicionar-medico.component.css']
})
export class AdicionarMedicosComponent implements OnInit {
 
  medicos : Medico;

  constructor(private service: MedicoService, private router: Router) {
    this.medicos = {} as Medico;
   }

  ngOnInit(): void {
  }

  salvar(medicos : Medico){
    this.service.salvar(medicos).subscribe(() => {
      console.log('Medico cadastrado!');
      this.router.navigate(['/medicos']);
    })
  }

}
