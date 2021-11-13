import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Remedio } from '../models/remedio.model';

@Injectable({
  providedIn: 'root'
})
export class RemedioService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3001/remedios";

  listar(): Observable<Remedio[]> {
    return this.http.get<Remedio[]>(this.url);
  }

  buscarPorId(id: number): Observable<Remedio> {
    const path = `${this.url}/${id}`;
    return this.http.get<Remedio>(path);
  }

  salvar(remedio: Remedio): Observable<Remedio> {
    return this.http.post<Remedio>(this.url, remedio);
  }

  atualizar(remedio: Remedio): Observable<Remedio> {
    const path = `${this.url}/${remedio.id}`;
    return this.http.put<Remedio>(path, remedio);
  }

  excluir(id? : number): Observable<Remedio> {
    const path = `${this.url}/${id}`;
    return this.http.delete<Remedio>(path);
  }

}