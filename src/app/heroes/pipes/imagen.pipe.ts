import { Heroe } from './../interfaces/heroes.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen',
  /* pure: false, */
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    const base: string = '../../../../assets';
    if (!heroe.id && !heroe.alt_img) {
      return `${base}/no-image.png`;
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    } else {
      return `${base}/heroes/${heroe.id}.jpg`;
    }
  }
}
