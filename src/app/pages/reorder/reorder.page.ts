import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {
personajes:string[]=['personaje1','personaje2','personaje3','personaje4','personaje5'];
//creamos propiedad
sePuedemover:boolean=true;

  constructor() { }

  ngOnInit() {
  }
  //al darle a complete se termina de mover si no se queda atascado
  doReorder(cambio){
    console.log(cambio)
    cambio.detail.complete();

    //vamos a reordenar el arreglo de la misma forma que la hemos dejado al arrastrar
    //coges de personajes el que esta en cambio y crear im array con todos los elementos que esta cortando y 
    //por eso cogemos el que esta en la posicion 0
    const moverItems =this.personajes.splice(cambio.detail.from,1)[0];
    this.personajes.splice(cambio.detail.to,0,moverItems);



    console.log(this.personajes)
  }


  onClick(){
    this.sePuedemover=!this.sePuedemover
  }
}
