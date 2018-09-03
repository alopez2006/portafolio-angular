import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina, Equipo } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: Array<Equipo> = [];

  // private http:HttpClient para peticiones REST, servicios externos
  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    // Leer archivo json
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.cargada = true;
        this.info = resp;
        console.log(resp);
        console.log(resp['facebook']);
        console.log(resp.facebook);
      });
  }

  private cargarEquipo() {
    this.http.get('https://angular-portafolio-4b927.firebaseio.com/equipo.json')
      .subscribe((resp: Array<Equipo>) => {
        this.equipo = resp;
        console.log(resp);
        console.log(resp[0].nombre);
      });
  }

}
