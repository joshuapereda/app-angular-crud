import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-estudiante',
  //FormsModule permitir ingresar datos en los formularios
  imports: [FormsModule],
  templateUrl: './estudiante.html',
  styleUrl: './estudiante.css',
})
export class Estudiante {
    nombre : string ;
    apellido : string ;
    email: string;
    edad: number;
    foto: string;
    estado: boolean;

  // Base de datos temporal
  estudiantes: any[] = [];
  //Verificar si esta editando
  editando: boolean = false;
  //
  posicion: number = -1;

    constructor(){
        this.nombre = "";
        this.apellido = "";
        this.email = "";
        this.edad = 0;
        this.foto = "";
        this.estado = true;
    }
    funGuardar(){
      //si editando es verdadero edita
       if(this.editando){
        this.estudiantes[this.posicion].nombre = this.nombre;
        this.estudiantes[this.posicion].apellido = this.apellido;
        this.estudiantes[this.posicion].email = this.email;
        this.estudiantes[this.posicion].edad = this.edad;
        this.estudiantes[this.posicion].foto = this.foto;
        this.estudiantes[this.posicion].estado = this.estado;

        //cuando termina de editar la variable editando sera false
        this.editando = false;

      //si no es verdadero agrega un nuevo estudiante
       }else{
        this.estudiantes.push({
          nombre: this.nombre,
          apellido:this.apellido,
          email:this.email,
          edad:this.edad,
          foto:this.foto,
          estado:this.estado
        });
       }

      //limpiar los campos del formulario
      this.nombre = "";
      this.apellido = "";
      this.email = "";
      this.edad = 0;
      this.foto = "";
      this.estado = true;
    }
    funEliminar(posicion: number){
      //Alertas para confirmar si estas seguro de eliminar
      if(confirm("¿Está seguro de eliminar este estudiante?")){
        this.estudiantes.splice(posicion , 1);
      }
    }
    funEditar(est: any, posicion: number){
      //cuando presionemos el boton editar la variable editando sera true
      this.editando= true;
      //posicion del estudiante que vamos a editar
      this.posicion = posicion;

      //Asignar los valores del estudiante a los campos del formulario
      this.nombre = est.nombre;
      this.apellido = est.apellido;
      this.email = est.email;
      this.edad = est.edad;
      this.foto = est.foto;
      this.estado = !est.estado;
    }
}
