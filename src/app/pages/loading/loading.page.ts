import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {
  //creamos la propiedad de loading
  loading: HTMLIonLoadingElement;

  //cogemos el loading controller para luego poder usarlo
  constructor(private loadingController:LoadingController) { }

  ngOnInit() {
  }


// llamamos al metodo donde se crea el loading y le pasamos el mensaje
  mostrarLoading(){
    this.presentLoading('cargando...');
    //asi estara esperando dos segundos a terminar
    setTimeout(()=>{
      this.loading.dismiss();
    },2000)
    
  }

  async presentLoading(mensaje:string) {
    this.loading = await this.loadingController.create({

      message: mensaje,
      //duration: 2000
    });
    await this.loading.present();

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }
}
