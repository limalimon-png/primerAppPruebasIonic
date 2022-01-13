import { Component, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';



//prueba mia

interface Prueba{
  name:string;
  type:string;
  
}
@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }


//un solo boton para aceptar

  async presentAlert() {
    const alert = await this.alertController.create({
      //backdropDismiss para que tenga que aceptar la alerta
      backdropDismiss:false,
     
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'Estas apunto de sufrir un ataque',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


//varios botones para aceptar

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
    backdropDismiss:false,
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      //de esta forma no somos capaces de devolver nada 
      //y no sabemos cual pulsa
      /*
      buttons: ['Cancel', 'Open Modal', 'Delete']
      */



    //Con un handler en cada posibilidad sabremos.

    buttons:[
      {
        text:"OK",
        handler:()=>{
          console.log("pulso en ok")
        }
      },
      {
        text:"Cancel",
        //role sirve para que cierre sin ningun handler 
        role:"cancel",
        //le ponemos la clase rojo para poner las letras de color rojo
        cssClass:"rojo"
      /*  handler:()=>{
          console.log("Cancel")
        }*/
      },

    ]
    });

    await alert.present();
  }



  /// otra alerta esta es mas grande

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
   
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data:any) => {
            console.log(data);
            
          }
        }
      ]
    });

    await alert.present();
  }

  informacion:any;


  prueba: Prueba[]=[
    {
      type:'american-football-outline',
      name: 'peter pank',
     
    },
    {
      type:'alert-circle-outline',
      name: 'felipe luis',
     
    }


   
  ];

  
  onClick(){

  }
  

  
}
