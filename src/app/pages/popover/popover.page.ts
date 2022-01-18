import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverController:PopoverController,
     ) { }

  ngOnInit() {
  }

  //metodo para el popOvver
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      //ponemos el noimbre del componente que queremos abrir (el popover-info que hemosc reado)
      component: PopoverInfoComponent,
 
      event: ev,
      translucent: true,
      backdropDismiss:false
    });
    await popover.present();
  //onwiil dismiss porque lo queremos nada mas pulsarlo
    const { data } = await popover.onWillDismiss();
    console.log(data);
  }

}
