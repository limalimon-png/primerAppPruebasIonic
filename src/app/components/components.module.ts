import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PopoverInfoComponent } from './popover-info/popover-info.component';

//para usar el headerComponent en otro lado, lo declaramos y lo exportamos

@NgModule({
  declarations: 
  [
    HeaderComponent,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    //importante importar ionic module para poder usar la parte de ionic en los componentes
    IonicModule
  ],
  exports:[
    HeaderComponent,
    //ylo exportamos para poder usarlo fuera
    PopoverInfoComponent
   
  ]
})
export class ComponentsModule { }
