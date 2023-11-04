import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
})
export class SaludoComponent {
  mensaje: string = 'Hola';

  constructor() {}
}
