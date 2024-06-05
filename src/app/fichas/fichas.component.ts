import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FichaPersonaComponent } from '../ficha-persona/ficha-persona.component';


import { fichasCurriculares } from '../data/fichas-curriculares';

@Component({
  selector: 'app-fichas',
  standalone: true,
  imports: [CommonModule, FichaPersonaComponent, FormsModule],
  templateUrl: './fichas.component.html',
  styleUrl: './fichas.component.css'
})
export class FichasComponent {
  readonly baseUrl = 'https://sitl.diputados.gob.mx/LXV_leg/fotos_lxvconfondo';
  fichasCurriculares = fichasCurriculares;
  
  filteredFichas = fichasCurriculares;
  searchTerm: string = '';

filterFichas(): void {
    this.filteredFichas = this.fichasCurriculares.filter(persona =>
      persona.nombre.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      persona.ciudad.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
