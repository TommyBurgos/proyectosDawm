import { Component } from '@angular/core';
import { Serie, Attributes } from '../../interface/serie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent {
  
  serie!: Serie;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      let id = params['title']; 
      let clienteAngular = JSON.parse(localStorage.getItem("clienteAngular")!);
          
      if(clienteAngular) {
        let series = clienteAngular as Array<Serie>  
        let seriesfiltered = series.filter(serie => serie["title"] == id)    
        this.serie = seriesfiltered[0];
      }
      

    });
    
  }


}
