import { Component, OnInit } from '@angular/core';
import { Remedio } from '../models/remedio.model';
import { Remedios } from './remedio';
import { AdminServiceService } from '../services/admin-service.service';


@Component({
  selector: 'app-remedios',
  templateUrl: './remedios.component.html',
  styleUrls: ['./remedios.component.css']
})
export class RemediosComponent implements OnInit {



  remedios = Remedios;
 


  constructor() { 
    this.remedios = Remedios
  }

  ngOnInit(): void {
   
  }

  

}
