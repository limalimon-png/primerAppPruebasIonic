import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  albumes: any[]=[];
  textoBucar:string='';

  constructor(private dataservice:DataService) { }

  //cogemos toda la informacion que hay cuando llamamos a getAlbums
  //y los gurdamos el albumes
  ngOnInit() {
    this.dataservice.getAlbums().subscribe(albumes=>{
      console.log(albumes),
      this.albumes=albumes;
    });
  }


  onSearchChange(event){
    console.log(event)
    //mete el texto que ha escrito en la propiedad textobuscar para despues enviarselo al filtro
    this.textoBucar=event.detail.value;
  }
}


