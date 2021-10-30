import { Component, OnInit } from '@angular/core';
import { Remedios } from './remedios';

@Component({
  selector: 'app-remedios',
  templateUrl: './remedios.component.html',
  styleUrls: ['./remedios.component.css']
})
export class RemediosComponent implements OnInit {

  remedios =  Remedios;
  constructor() { }

  ngOnInit(): void {
  }

}
