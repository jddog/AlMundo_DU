import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class API_AlMundoProvider {
  //Declaracion de variables
    private urlJson= 'assets/data/data.json';
    
    constructor(private _http: Http) {
      //Llamamos el metodo de obtiene el listado de hoteles
      this.getListhotels();
    }
    
    //Metodo encaragado de obtener el listado de hoteles a partir de un archivo .json
    getListhotels() {
       return this._http.get(this.urlJson).map((response: Response) => response.json());
    }
}
