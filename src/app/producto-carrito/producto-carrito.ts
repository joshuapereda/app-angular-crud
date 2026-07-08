import { Component, signal,  } from '@angular/core';

interface ProductoInterface{
  nombre:string,
  precio:number,
  stock:number,
  descripcion:string,
  imagen:string,
  estado:boolean
}


@Component({
  selector: 'app-producto-carrito',
  imports: [],
  templateUrl: './producto-carrito.html',
  styleUrl: './producto-carrito.css',
})
export class ProductoCarrito {
  productos: ProductoInterface[]=[]
  carrito=signal<any>([]);
  mostrarCarrito = false;
  constructor(){
    const prods=localStorage.getItem("productos") || "[]";
    this.productos = JSON.parse(prods);
  }

  agregarCarrito(prod: any){
    const p= {nombre:prod.nombre, cantidad: 1, precio: prod.precio, imagen: prod.imagen}
    this.carrito.set([...this.carrito(), p]);
  }

 eliminarDelCarrito(item: any) {
  this.carrito.update(items =>
    items.filter((p: any) => p !== item)
  );
}
  total() {
    //reduce- todo un array a un solo valor (en este caso, un número: el total)
    return this.carrito().reduce((acum: any, actu: any) => acum + actu.precio, 0);
            //                      ↑           ↑                            ↑
            //                  acumulador    elemento actual           valor inicial

  }

}
