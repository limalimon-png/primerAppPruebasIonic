import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  segmento:string;
  superHeroes: Observable<any>;

  constructor(private dataService:DataService) { }

  ngOnInit() {
     this.superHeroes= this.dataService.getSuperHeroes();
  }


  segmentChanged(ev: any) {
    this.segmento=ev.detail.value;
    //para que recoja todo, ya que en la busqueda si el texto es vacio devuelve todo
    if(this.segmento=='todos'){
      this.segmento='';
    }
    console.log('Segment changed', this.segmento);
  }

}
