import { Heroe } from './../interfaces/heroes.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    const base: string = '../../../../assets';
    return `${base}/heroes/${heroe.id}.jpg`;
    /* : `${base}/no-image.jpg` */
  }
}
