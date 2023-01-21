import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
    `
      .card-body {
        color: #000;
      }
      .card-title {
        font-size: 18px;
      }
    `,
  ],
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe!: Heroe;
  constructor() {}

  ngOnInit(): void {}
}
