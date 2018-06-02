import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(value: any): any {

     if ( !value ) {
        return 'assets/imgs/noimage.png';
     }

     if ( value.length > 0 ) {
        return value[0].url;
     } else {
       return 'assets/imgs/noimage.png';
     }
  }

}
