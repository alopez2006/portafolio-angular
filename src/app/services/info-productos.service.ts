import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoProductosService {

  cargando = true;

  productos: Producto[] = [];

  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {
    return new Promise((resolve, reject) => {

      this.http.get('https://angular-portafolio-4b927.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[]) => {
        console.log(resp);
        this.productos = resp;
        this.cargando = false;
        resolve();
        /* setTimeout(() => {
          this.cargando = false;
        }, 2000); */
      });

    });
  }

  cargarProducto(id: string) {
    return this.http.get(`https://angular-portafolio-4b927.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto(termino: string) {
    // Cargar productos
    if (this.productos.length === 0) {
      this.cargarProductos().then(() => {
        // Cargar productos
        // Filtrar productos
        this.filtrarProductos(termino);
      });
    } else {
      // Filtrar productos
      this.filtrarProductos(termino);
    }
    /* this.productosFiltrado = this.productos.filter(producto => {
      return true;
    }); */
  }

  filtrarProductos(termino: string) {
    console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach(prod => {
      const titulominuscula = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf(termino) >= 0 || titulominuscula.indexOf(termino) >= 0) {
        this.productosFiltrado.push(prod);
      }
    });
  }

}
