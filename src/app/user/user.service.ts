import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';

@Service()
export class UserService {
   private apiUrl= 'https://dummyjson.com/users';
   http=inject(HttpClient);

   funObtenerUsuarios(){
    return this.http.get(this.apiUrl,{timeout: 100});
   }
}
