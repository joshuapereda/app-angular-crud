import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto',
  //FormsModule - Para trabajar con formularios
  imports: [FormsModule],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
//ACA VA LA LOGICA
export class Producto {
  // atributos
  nombre: string = "";
  precio: number = 0;
  stock: number;
  descripcion: string;
  imagen: string;
  estado: boolean;

  // Base de datos temporal
  productos: any[] = [];

  editando: boolean = false;
  posicion: number = -1;

  // constructor
  constructor(){
    // inicializar datos
    this.stock = 0;
    this.descripcion = "";
    this.imagen = "";
    this.estado = true;
    //obtener datos del localStorage
    const prods= localStorage.getItem("productos") || "[]";
    this.productos= JSON.parse(prods);
  }

  // metodos o funciones
  funGuardar(){
    if(this.editando){
      this.productos[this.posicion].nombre = this.nombre;
      this.productos[this.posicion].precio = this.precio;
      this.productos[this.posicion].stock = this.stock;
      this.productos[this.posicion].imagen = this.imagen;
      this.productos[this.posicion].descripcion = this.descripcion;

      this.editando = false
    }else{
      this.productos.push({
        nombre: this.nombre,
        precio: this.precio,
        stock: this.stock,
        descripcion: this.descripcion,
        imagen: this.imagen,
        estado: this.estado
        });

    }
      //almacenar datos en localStorage
      localStorage.setItem("productos",JSON.stringify(this.productos))
      
      // Limpiar los campos del formulario
      this.nombre = "";
      this.precio = 0;
      this.stock = 0;
      this.descripcion = "";
      this.imagen = "";

      console.log(this.productos);
  }

  funEliminar(posicion: number){
    if(confirm("Está seguro de eliminar el Producto?")){
      this.productos.splice(posicion, 1);
    }
  }

  funEditar(prod: any, posicion: number){

    this.editando = true;
    this.posicion = posicion;

    this.nombre = prod.nombre;
      this.precio = prod.precio;
      this.stock = prod.stock;
      this.descripcion = prod.descripcion;
      this.imagen = prod.imagen;
  }

}
