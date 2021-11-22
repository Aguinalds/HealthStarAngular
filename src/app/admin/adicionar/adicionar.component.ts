import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Remedio } from 'src/app/models/remedio.model';
import { RemedioService } from 'src/app/services/remedio.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})

export class AdicionarComponent implements OnInit {

  remedio : Remedio;
  
  constructor(private service: RemedioService, private router: Router) { 
    this.remedio = {} as Remedio;
  }

  ngOnInit(): void {
  
  }


  
  salvar(remedio : Remedio){
    this.service.salvar(remedio).subscribe(() => {
      console.log('Remedio salvo!');
      this.router.navigate(['/remedios']);
    })
    
  }
}
