import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  //vamos a crearnos una fecha por defecto para aplicarlo al calendario
  fechaNac:Date= new Date();

  cambioFecha(event){
    console.log(event)
    console.log(new Date(event.detail.value))
    
  }

  constructor() { }

  ngOnInit() {
  }

}
