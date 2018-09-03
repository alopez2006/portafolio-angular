import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { InfoProductosService } from './services/info-productos.service';
import { InfoEquipoService } from './services/info-equipo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // title = 'portafolio';

  constructor(public infoPagina: InfoPaginaService, public infoEquipo: InfoEquipoService, public infoProductos: InfoProductosService) {

  }
}
