import { Component, inject, signal } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  imports: [],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {
  //1-inyectar el servicio BlogService para poder conectamerme a la funciones
  blogService= inject(BlogService);
  /*SIGNAL estás creando una variable reactiva.
  Reactiva significa:"Cada vez que cambie su valor, Angular actualiza automáticamente la pantalla.
  Un Signal guarda información y además avisa a Angular cuando cambia."
  Y ANY es = Puede guardar cualquier tipo de dato. */
  publicaciones= signal<any>([]);
  cargando=signal(true);
  constructor(){
    this.funListarPublicaciones();
  }

  funListarPublicaciones(){
    this.cargando.set(true);
    /*La respuesta tarda.
    Por eso usamos subscribe()*/
    this.blogService.funObtenerArticulos().subscribe({
      //El subscribe trabaja con el OBSERVABLE si el observable trae los datos, se ejecuta la funcion next
      next: (data: any) =>{
        this.publicaciones.set(data);
        this.cargando.set(false)
      },
      //Si el observable no trae los datos, se ejecuta la funcion error
      error: (error) =>{
         console.error('Error al obtener las publicaciones:', error)
      }
    })
  }
}
