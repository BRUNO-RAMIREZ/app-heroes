import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [],
})
export class ConfirmarComponent implements OnInit {
  constructor(
    private _dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  borrar() {
    this._dialogRef.close(true);
  }

  cerrar() {
    this._dialogRef.close();
  }
}
