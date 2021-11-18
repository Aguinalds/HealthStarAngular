import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../models/medicos.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/medicos";

  listar(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.url);
  }
  
  salvar(medicos: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.url, medicos);
  }

  buscarPorId(id: number): Observable<Medico> {
    const path = `${this.url}/${id}`;
    return this.http.get<Medico>(path);
  }

  atualizar(remedio: Medico): Observable<Medico> {
    const path = `${this.url}/${remedio.id}`;
    return this.http.put<Medico>(path, remedio);
  }

  excluir(id? : number): Observable<Medico> {
    const path = `${this.url}/${id}`;
    return this.http.delete<Medico>(path);
  }
}
