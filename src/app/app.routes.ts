import { Routes } from '@angular/router';
import { Producto } from './producto/producto';
import { Estudiante } from './estudiante/estudiante';
import { Curso } from './curso/curso';
import { Blog } from './blog/blog';
import { User } from './user/user';
import { Error404 } from './error404/error404';
import { Inicio } from './inicio/inicio';

export const routes: Routes = [
  { path: 'inicios', component:Inicio},
  { path: 'productos', component: Producto },
  { path: 'estudiantes', component: Estudiante },
  { path: 'cursos', component: Curso },
  { path: 'blogs', component: Blog},
  { path: 'users', component:User },
  //Si ingresan a una ruta que no existe, se redirige a la página de error 404
  { path:'**', component: Error404 }
];
