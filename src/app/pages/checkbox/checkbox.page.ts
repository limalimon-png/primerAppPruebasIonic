import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
datos :string;
data=[
{
  name: 'primary',
  selected:false
},
{
  name: 'secondary',
  selected:true
},
{
  name: 'tertiary',
  selected:false
},
{
  name: 'success',
  selected:true
},

]



  constructor() { }

  ngOnInit() {
  }



  //metodos que se llaman desde fuera

  onClick(item:any){
   // console.log(item);
  }
  //cuando clican el boton coge la informacion de de data
  onClick2(){
    this.datos="";
    for (let index = 0; index < this.data.length; index++) {
      if(this.data[index].selected)
      this.datos+=", "+this.data[index].name;
      
    }

  }
//elimina la informacion de data
  borrarDatos(){
    this.datos="";
  }
}
