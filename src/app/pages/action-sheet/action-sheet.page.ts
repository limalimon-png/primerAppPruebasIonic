import { Component, OnInit } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
}) 
export class ActionSheetPage implements OnInit {

  constructor(private actionSheetController: ActionSheetController) {}

  ngOnInit() {
  }

  onClick(){
this.presentActionSheet()
  }






  //aqui hemos copiado de la documenacion de action-sheet 
  //que es para compartir eliminar etc 
  //tenemos la informacion nombre icono etc

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Galeria',
      //si queremos que solo se pueda picar en cancelar para sallir lo ponemos en false
      //backdropDismiss:false,
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        //agregamos una clase css para pintar de rojo la papelera
        cssClass:"rojo",
        id: 'delete-button-outline',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }



}
