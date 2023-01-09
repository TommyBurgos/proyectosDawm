import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './components/splash/splash.component';
import { SeriesComponent } from './components/series/series.component';
import { SerieComponent } from './components/serie/serie.component';

const routes: Routes = [
  { path: "splash", component: SplashComponent },
  { path: "series", component: SeriesComponent },
  { path: "serie/:title", component: SerieComponent },
  { path: "**", redirectTo: "splash" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
