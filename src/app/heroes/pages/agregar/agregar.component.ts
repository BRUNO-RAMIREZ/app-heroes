import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [``],
})
export class AgregarComponent implements OnInit {
  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  constructor(
    private _heroesService: HeroesService,
    private _activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this._router.url.includes('editar')) {
      return;
    }
    this._activatedRoute.params
      .pipe(switchMap(({ id }) => this._heroesService.getHeroe(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  guardar(): void {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }
    if (this.heroe.id) {
      //actualizar
      this._heroesService
        .actualizarHeroe(this.heroe)
        .subscribe((heroe) => this.mostrarSnakbar('Registro Actualizado'));
    } else {
      //crear
      this._heroesService.agregarHeroe(this.heroe).subscribe((heroe) => {
        this._router.navigate(['/heroes/editar', heroe.id]);
        this.mostrarSnakbar('Registro Creado');
      });
    }
  }

  borrar(): void {
    const dialog = this._dialog.open(ConfirmarComponent, {
      width: '250px',
      data: { ...this.heroe },
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this._heroesService.borrarHeroe(this.heroe.id!).subscribe((heroe) => {
          this._router.navigate(['/heroes']);
        });
      }
    });
  }

  mostrarSnakbar(mensaje: string): void {
    this._snackBar.open(mensaje, 'ok!', {
      duration: 2500,
    });
  }
}
