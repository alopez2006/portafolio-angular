import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoProductosService } from '../../services/info-productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, public infoProductos: InfoProductosService) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      console.log(parametros['termino']);

      this.infoProductos.buscarProducto(parametros['termino']);
    });
  }

}
