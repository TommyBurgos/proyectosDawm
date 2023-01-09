import { Component } from '@angular/core';
import { ResourcesService } from '../../service/resources.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {
  constructor(private resourcesService: ResourcesService, private router: Router) {}


  ngOnInit() {
    this.resourcesService.getData().subscribe(response => {
      let clienteAngular = localStorage.getItem("clienteAngular");
      if(!clienteAngular) {
        localStorage.setItem("clienteAngular", JSON.stringify(response));
      }
      
      console.log(response);

    }),
    setTimeout(() => {
      this.router.navigate(['movies']);
    }, 1500);

  }
    
  }

