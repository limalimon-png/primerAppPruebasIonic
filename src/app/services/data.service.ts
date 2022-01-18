import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  //servicio creado para coger los usuariuos, importante importar HttClient
  getUsuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  //importamos el menu del json que hemos creado, mirar inicio.page.ts
  //devolvemos un arreglo de componente
  getMenu(){
    return this.http.get<Componente[]>('/assets/data/menu-opt.json');
  }
}
