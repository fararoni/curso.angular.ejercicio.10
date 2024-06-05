import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FichasComponent } from './fichas/fichas.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FichasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Fichas curriculares';
}
