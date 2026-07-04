import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-curso',
  imports: [FormsModule],
  templateUrl: './curso.html',
  styleUrl: './curso.css',
})
export class Curso {
  // atributos
  nombre: string;
  descripcion:string;
  cupos: number;
  estado: boolean;
  //Arreglo
  cursos: any[] = [];
  //
  editando: boolean = false;
  //
  posicion: number = -1;
  //contructor
  constructor(){
    this.nombre = "";
    this.descripcion = "";
    this.cupos = 0;
    this.estado = true;
  }

  funGuardar(){
    if(this.editando){
      this.cursos[this.posicion].nombre = this.nombre;
      this.cursos[this.posicion].descripcion = this.descripcion;
      this.cursos[this.posicion].cupos = this.cupos;
      this.cursos[this.posicion].estado = this.estado;

      this.editando = false
    }else{
    this.cursos.push({
      nombre: this.nombre,
      descripcion:this.descripcion,
      cupos:this.cupos,
      estado:this.estado
    });
  }
    //limpiar los campos del formulario
    this.nombre = "";
    this.descripcion = "";
    this.cupos = 0;

  }
  funEditar(cur: any, posicion: number){
    this.editando = true;
    this.posicion = posicion;

    this.nombre = cur.nombre;
    this.descripcion = cur.descripcion;
    this.cupos = cur.cupos;
    this.estado = cur.estado;

  }

  funEliminar(posicion: number){
    if(confirm("¿Desea eliminar el curso?")){
      this.cursos.splice(posicion, 1);
    }
  }
}
