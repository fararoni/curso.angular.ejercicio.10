import { Component, Input } from '@angular/core';
import {NgClass, NgStyle, NgIf} from '@angular/common';
import { IFichaPersona } from '../interfaces/ificha-persona';


@Component({
  selector: 'app-ficha-persona',
  standalone: true,
  imports: [NgClass, NgStyle, NgIf],
  templateUrl: './ficha-persona.component.html',
  styleUrl: './ficha-persona.component.css'
})
export class FichaPersonaComponent {
  @Input() fichaPersona!: IFichaPersona;
  @Input() baseUrl!: String;

  //-- NgClasses con un método
  listaClasses: Record<string, boolean> = {};
  deacuerdo: boolean = false;
  ngOnInit(){
    this.setListaClasses();  
    console.log( `FichaPersonaComponent ${ this.fichaPersona.id}`);
  }

  setListaClasses(){
    console.log('setStatusClasses');
    this.listaClasses = {
      'listing-reelecta': this.fichaPersona.reelecta,
      'listing-enlicencia': this.fichaPersona.enlicencia,
      'listing-suplencia' : this.fichaPersona.suplente.length > 0
    }
  } 

  toggleDeAcuerdo() { this.deacuerdo= !this.deacuerdo; }

  getStylesDeAcuerdo() {
    console.log('getStylesDeAcuerdo')
    return {
      'color': this.deacuerdo ? 'white' : 'black',
      'background-color': this.deacuerdo ? 'green' : 'red',
      'font-weight': this.deacuerdo ? 'bold' : 'normal',
      'padding': '10px',
      'border-radius': '5px'
    };
  }
}
