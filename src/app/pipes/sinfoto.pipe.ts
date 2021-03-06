import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sinfoto'
})
export class SinfotoPipe implements PipeTransform {

  transform(imagenes:any [] ): any {
    let noimage = 'assets/img/noimage.png';
    // verifico si existen imgenes y sino tengo que mandar una fotografia por defecto
    if(!imagenes){
      return noimage;
  }

    return (imagenes.length > 0)? imagenes[1].url:noimage;
  }

}
