import { InfiniteScrollPage } from './../infinite-scroll/infinite-scroll.page';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

//creamos esta interfaz para poder ponerle un tipado expecifico para componente que tiene 2 propiedades


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  //creamos la prpiedad donde vamos a recibir el menu
  componentes: Observable<Componente[]>;

  //cogemos menuController y dataSevicie
  //menuController para poder abrir el menu
  //dataService para leer el menu que recibim0os
  constructor(private menuController:MenuController,
    private dataService:DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenu();
  }


  abrirMenu(){
    this.menuController.open('first');

  }
}
