import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from '../models/consulta.model';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/consultas";

  listar(): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(this.url);
  }
  
  salvar(consultas: Consulta): Observable<Consulta> {
    return this.http.post<Consulta>(this.url, consultas);
  }

  buscarPorId(id: number): Observable<Consulta> {
    const path = `${this.url}/${id}`;
    return this.http.get<Consulta>(path);
  }

  atualizar(consulta: Consulta): Observable<Consulta> {
    const path = `${this.url}/${consulta.id}`;
    return this.http.put<Consulta>(path, consulta);
  }

  excluir(id? : number): Observable<Consulta> {
    const path = `${this.url}/${id}`;
    return this.http.delete<Consulta>(path);
  }
}