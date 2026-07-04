import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
//--------------------------------------------------//
/*           CONECTAR CON EL BACKEND               */
//--------------------------------------------------//
@Service()
export class BlogService {
  //Aquí guardas la dirección del Backend.
  private apiUrl = 'https://dev.to/api/articles';
  //Inyeccionde dependencia
  //Sin HttpClient Angular no puede hacer solicitudes por internet.
  http= inject(HttpClient);

  //ES UNA PROMESA
  //OPTENER LISTA DE ARTICULOS, CONSUMIENDO DATOS DE LA API, Y RETORNANDO UN OBSERVABLE
  funObtenerArticulos(){
    //consumiendo datos,consumiendo informacion de la api, y retornando un observable
    return this.http.get(this.apiUrl,{timeout: 1000 });
    /*Cuando hacemos esto nor esivimos directamente el listado de productos
    resivimos un OBSERVABLE:
    Un Observable es como un mensajero.
    Todavía no trae los datos.
    Solo promete avisarte cuando lleguen.  */
  }
}

