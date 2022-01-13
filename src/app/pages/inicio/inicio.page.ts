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
    }


   
  ];
  constructor() { }

  ngOnInit() {
  }

}
