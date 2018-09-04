import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoProductosService } from '../../services/info-productos.service';
import { ProductoDescripcion } from '../../interfaces/interfaces';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor(private route: ActivatedRoute, public infoProducto: InfoProductosService) { }

  ngOnInit() {

    this.route.params.subscribe(parametros => {
      // console.log(parametros);
      this.infoProducto.cargarProducto(parametros['id'])
        .subscribe((producto: ProductoDescripcion) => {
          console.log(producto.categoria);
          this.producto = producto;
          this.id = parametros['id'];
        });
    });

  }

}
