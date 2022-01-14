import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckboxPageRoutingModule } from './checkbox-routing.module';
import { CheckboxPage } from './checkbox.page';
import { ComponentsModule } from '../../components/components.module';
//import { Component } from '@angular/core';



// // @Component({
// //   selector: 'app-page-home',
// //   templateUrl: 'home.page.html',
// //   styleUrls: ['home.page.scss']
// // })



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckboxPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CheckboxPage]
})
export class CheckboxPageModule {
  

}
