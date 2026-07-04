import { Routes } from '@angular/router';
import { Producto } from './producto/producto';
import { Estudiante } from './estudiante/estudiante';
import { Curso } from './curso/curso';
import { Blog } from './blog/blog';
import { User } from './user/user';

export const routes: Routes = [
  { path: 'productos', component: Producto },
  { path: 'estudiantes', component: Estudiante },
  { path: 'cursos', component: Curso },
  { path: 'blogs', component: Blog},
  { path: 'users', component:User }
];
