import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Remedio } from '../models/remedio.model';
import { RemedioService } from '../services/remedio.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  remedio : Remedio;
  constructor(private service: RemedioService,
    private router: Router,
    private route: ActivatedRoute) {
      this.remedio = {} as Remedio;
     }

  ngOnInit(): void {
    const str = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(Number(str)).subscribe( remedio => {
      this.remedio = remedio;
    })
  }

}
