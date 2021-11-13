import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Remedio } from '../models/remedio.model';
import { RemedioService } from '../services/remedio.service';



@Component({
  selector: 'app-remedios',
  templateUrl: './remedios.component.html',
  styleUrls: ['./remedios.component.css']
})
export class RemediosComponent implements OnInit {



  remedios: Remedio[];
  displayedColumns: string[] = ['id', 'nome', 'ciclo', 'tarja'];
 


  constructor(private service : RemedioService) { 
    this.remedios = [];
  }

  ngOnInit(): void {
    this.service.listar().subscribe( remedios => {
      this.remedios = remedios;
      console.log(this.remedios)
    });
  }
  

  

}
