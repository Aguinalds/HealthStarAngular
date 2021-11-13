import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Remedio } from 'src/app/models/remedio.model';
import { RemedioService } from 'src/app/services/remedio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  remedio: Remedio;
  constructor(private service: RemedioService,
    private router: Router,
    private route: ActivatedRoute) {
    this.remedio = {} as Remedio;
  }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(str)).subscribe(remedio => {
      this.remedio = remedio;
    })
  }

  atualizar(remedio: Remedio) {
    this.service.atualizar(remedio).subscribe(() => {
      console.log('Remedio atualizado!');
      this.router.navigate(['/remedios'])
    })
  }

}
