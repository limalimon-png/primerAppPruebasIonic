import { InfiniteScrollPage } from './../infinite-scroll/infinite-scroll.page';
import { Component, OnInit } from '@angular/core';

//creamos esta interfaz para poder ponerle un tipado expecifico para componente que tiene 2 propiedades
interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[]=[
    
    {
      
      icon:'american-football-outline',
      name: 'Action Sheet',
      redirecTo: '/action-sheet'
    },
    {
      icon:'alert-circle-outline',
      name: 'Alert',
      redirecTo: '/alert'
    },
    {
      icon:'beaker-outline',
      name: 'Avatar',
      redirecTo: '/avatar'
    },
    {
      icon:'radio-button-on-outline',
      name: 'Botones',
      redirecTo: '/botones'
    },
    {
      icon:'card-outline',
      name: 'Cards',
      redirecTo: '/card'
    },
    {
      icon:'checkmark-done-outline',
      name: 'checkbox',
      redirecTo: '/checkbox'
    },
    {
      icon:'calendar-outline',
      name: 'dateTime',
      redirecTo: '/date-time'
    },
    {
      icon:'bookmark-outline',
      name: 'Fab',
      redirecTo: '/fab'
    },
    {
      icon:'headset-outline',
      name: 'prueba',
      redirecTo: '/prueba'
    },
    {
      icon:'grid-outline',
      name: 'grid',
      redirecTo: '/grid'
    },
    
    {
      icon:'leaf-outline',
      name: 'InfiniteScroll',
      redirecTo: '/infinite-scroll'
    },
    {
      icon:'terminal-outline',
      name: 'inputs',
      redirecTo: '/input'
    },
    {
      icon:'terminal-outline',
      name: 'listas',
      redirecTo: '/list'
    },
    
    {
      icon:'refresh-circle-outline',
      name: 'loading',
      redirecTo: '/loading'
    },

   
  ];
  constructor() { }

  ngOnInit() {
  }

}
