import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

//para hacer referencia a un componente del html usamos viewchild
@ViewChild(IonList) ionList:IonList;

  usuarios:Observable<any>;
  constructor(private dataService:DataService ) { }

  ngOnInit() {
    this.usuarios=this.dataService.getUsuarios();
  }


  favorite(item:any){
    console.log('favourite',item)
    this.ionList.closeSlidingItems();
  }
  share(item:any){
console.log('share',item)
this.ionList.closeSlidingItems();


}
  delete(item:any){
console.log('delete',item)
this.ionList.closeSlidingItems();

}


}
