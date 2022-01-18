import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  //convertimos el infiniteScroll en una propiedad
@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

data :any[]=Array(20);
constructor() {}

loadData(event) {
  setTimeout(() => {
    console.log(event);
    //termina el loading
    const nuevoArr =Array(20);
    //añadimos 20 datos mas a nuestro array data
    this.data.push(...nuevoArr);
    //event.target.complete();
    //
    //terminamos de hacer el loading
    this.infiniteScroll.complete();

    // App logic to determine if all data is loaded
    // and disable the infinite scroll
    // si carga 100 elementos ya para
    if (this.data.length == 100) {
      event.target.disabled = true;
    }
  }, 500);
}

toggleInfiniteScroll() {
  this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
}

  ngOnInit() {
  }


 

}
