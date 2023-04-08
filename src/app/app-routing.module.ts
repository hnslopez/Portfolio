import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/main/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    data: { title: 'Home' },
    component: HomeComponent
  },

  {
    path: '',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
