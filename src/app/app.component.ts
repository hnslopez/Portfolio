import { Component, HostListener, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Proyecto de Gestión';
  isCollapsed = true;
  isMobile = true;
  showNavbar = true;

  constructor(public translate: TranslateService, private router: Router, private titleService: Title ) {
    let defaultLenguage = localStorage.getItem('locale') || 'es';

    if (!['es', 'en'].includes(defaultLenguage)) {
      defaultLenguage = 'es';
      localStorage.setItem('locale', defaultLenguage);
    }

    translate.setDefaultLang(defaultLenguage || 'es');
  }

  onIsCollapsedChanged(value: boolean) {
    this.isCollapsed = value;
  }

  ngOnInit() {
    this.onResize();

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route: ActivatedRoute = this.router.routerState.root;
        let routeTitle = '';
        while (route!.firstChild) {
          route = route.firstChild;
        }
        if (route.snapshot.data['title']) {
          routeTitle = route!.snapshot.data['title'];
        }

        if(route.snapshot.data['navbar'] === undefined){
            this.showNavbar = true;
        }else{
          this.showNavbar = false;
        }


        

        return routeTitle;
      })
    ).subscribe((title: string) => {
      if (title) {

        this.titleService.setTitle(`Sistema de Gestión - ${title}`);
      }
    });
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }

  public switchLanguage(language: 'es' | 'en'): void {
    localStorage.setItem('locale', language);
    this.translate.use(language);
  }

  onToggleSidebar(isCollapsed: boolean): void {
    this.isCollapsed = isCollapsed;
  }
  
}
