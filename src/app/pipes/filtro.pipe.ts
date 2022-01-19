import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  //por defecto se crea el metodo transform vacio
  //recibe un arreglo de any y el texto por el que va a filtrar
  //y va a retornar un arreglo de any, con los datos ya filtrados

  transform(arreglo: any[], texto: string='',columna:string=''): any[] {

    //si esta vacio
    if(texto ===''){
      return arreglo;
    }
    //comprueba que no sea null
    if(!arreglo){
      return arreglo;
    }
    //pasamos el texto a minuscula
    texto=texto.toLocaleLowerCase();


    //devuelve el arreglo filtrado
    return arreglo.filter(
      //nombre item se lo hemos puesto pero podria ser cualquiera
      //dentro de item, seleccionamos el item.title que seria el nombre que queremos filtrar
    //item => item.title.toLowerCase().includes(texto)

    item => item[columna].toLowerCase().includes(texto)
    );


    // console.log(arreglo);
    // console.log(texto);
    // return null;
  }

}
