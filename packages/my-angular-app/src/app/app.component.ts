import { Component } from '@angular/core';
import { isOdd } from '@nx-myorg/is-odd';

@Component({
  selector: 'nx-myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-angular-app';
  nombre: number | null = null;
  isOddNumber?: boolean | null = null;

  onClick() {
    if (this.nombre === null) {
      this.nombre = 0;
    }
    this.isOddNumber = isOdd(this.nombre);
  }
}
