import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  //para que entre en las otras paginas de los tabs ahremos lo siguiente
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  {
    
    path: '',
    component: TabsPage,
    //rutas hijas:
    children:[
      {
        path:'tab1',
        loadChildren:()=> import('../avatar/avatar.module').then(m => m.AvatarPageModule)
        
      }
      ,
      {
        path:'tab2',
        loadChildren:()=> import('../reorder/reorder.module').then(m => m.ReorderPageModule)
        
      }
      ,
      {
        path:'tab3',
        loadChildren:()=> import('../list/list.module').then(m => m.ListPageModule)
        
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
