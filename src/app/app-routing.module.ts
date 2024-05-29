import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { CertificatesComponent } from './features/certificates/certificates.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: HomeComponent, data:{ title : 'home'} },
  { path:'about', component: AboutComponent,  data:{ title : 'about'} },
  { path:'certificates', component: CertificatesComponent,  data:{ title : 'certificates'} },
  { path:'projects', component: ProjectsComponent,  data:{ title : 'projects'} },

  { path: '**', component: HomeComponent }

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
