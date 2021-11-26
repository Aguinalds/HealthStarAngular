import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private service: UsuarioService,
    private router: Router) { }


  ngOnInit(): void {
  }

  salvarUsuario() {
    this.service.salvar(this.usuario).subscribe(() => {
      this.router.navigate(['/']);
    });


  }
}
