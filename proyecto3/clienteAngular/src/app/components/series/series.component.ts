import { Component } from '@angular/core';
import { Serie, Attributes } from '../../interface/serie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {
  series!: Serie[];

  constructor() {

    /* Leer desde el localStorage */
    let clienteAngular = JSON.parse(localStorage.getItem("clienteAngular")!);
      
    if(clienteAngular) {
      this.series = clienteAngular as Serie[]
    }
    

  }
}
