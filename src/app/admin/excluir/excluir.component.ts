import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Remedio } from 'src/app/models/remedio.model';
import { RemedioService } from 'src/app/services/remedio.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {


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

  excluir(remedio: Remedio) {
    this.service.excluir(remedio.id).subscribe(() => {
      console.log('Remedio excluido!');
      this.router.navigate(['/remedios'])
    })
  }
}
