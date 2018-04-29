import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, Jsonp, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

import { Hotel } from '../models/hotel';
import { Filtro } from '../models/filtro';

@Injectable()
export class API_AlMundoProvider {
  //Declaracion de variables
    private urlAPI= 'http://localhost:9000/AlMundoHotelsAPI/';
    
    constructor(private _http: Http, private _jsonp: Jsonp) {

    }
    
    //Metodo encaragado de obtener el listado de hoteles a partir de un archivo .json
    getListhotels() {
       return this._http.get(this.urlAPI+'hotels').map((response: Response) => response.json());
    }


    getListhotelsFilter(filtros : Filtro) {
      let heade = new Headers();
      heade.append('Content-Type', 'application/json');
      let filtro = JSON.stringify(filtros);
      
      console.log(filtro);
      return this._http.post(this.urlAPI+'hotelsFilter',filtro,{headers : heade}).map((response: Response) => response.json());
   }

   
   }

