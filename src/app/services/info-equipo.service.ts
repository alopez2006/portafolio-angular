import { Injectable } from '@angular/core';
import { Equipo } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoEquipoService {

  equipos: Array<Equipo> = [];

  // private http:HttpClient para peticiones REST, servicios externos
  constructor(private http: HttpClient) {
    this.cargarEquipo();
  }

  private cargarEquipo() {
    this.http.get('https://angular-portafolio-4b927.firebaseio.com/equipo.json')
      .subscribe((resp: Array<Equipo>) => {
        this.equipos = resp;
        console.log(resp);
      });
  }
}
