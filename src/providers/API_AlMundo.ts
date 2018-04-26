import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { Hotel } from '../models/hotel';

@Injectable()
export class API_AlMundoProvider {
  //Declaracion de variables
    private urlJson= 'assets/data/data.json';
    
    constructor(private _http: Http) {
    }
    
    //Metodo encaragado de obtener el listado de hoteles a partir de un archivo .json
    getListhotels() {
       return this._http.get(this.urlJson).map((response: Response) => response.json());
    }

   
   }

