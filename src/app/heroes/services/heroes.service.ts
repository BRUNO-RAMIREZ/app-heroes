import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroes.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private _baseUrl: string;

  constructor(private _http: HttpClient) {
    this._baseUrl = environment.baseUrl;
  }

  getHeroes(): Observable<Heroe[]> {
    return this._http.get<Heroe[]>(`${this._baseUrl}/heroes`);
  }

  getHeroe(id: string): Observable<Heroe> {
    return this._http.get<Heroe>(`${this._baseUrl}/heroes/${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this._http.get<Heroe[]>(
      `${this._baseUrl}/heroes?q=${termino}&_limit=6`
    );
  }
}
