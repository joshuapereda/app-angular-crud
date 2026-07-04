import { Component, inject, signal } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
   userService= inject(UserService);
   usuario= signal<any>([]);

   constructor(){
    this.funListarUsuarios();
   }
   funListarUsuarios(){
    this.userService.funObtenerUsuarios().subscribe({
      next:(data: any)=>{
        this.usuario.set(data.users);
      },
      error:(error)=>{
        console.error('Error al obtener los usuarios:', error)
      }
    })
   }
 }
