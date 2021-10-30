import { Component, OnInit } from '@angular/core';
import { Remedio } from '../models/remedio.model';
import { Remedios } from './remedio';


@Component({
  selector: 'app-remedios',
  templateUrl: './remedios.component.html',
  styleUrls: ['./remedios.component.css']
})
export class RemediosComponent implements OnInit {



  remedios = Remedios;
 


  constructor() { 
    
  }

  ngOnInit(): void {
   
  }

  

}
