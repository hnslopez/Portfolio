import { Component, OnInit, Inject, LOCALE_ID } from '@angular/core';

import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Application } from '@splinetool/runtime';
import { filter, map } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {

  title = 'Portafolio';
  loading = true;

  constructor(public translate: TranslateService, private router: Router, private titleService: Title, @Inject(LOCALE_ID) private locale: string) {
    let defaultLenguage = localStorage.getItem('locale') || 'es';
    console.log('Idioma del navegador:', this.locale);


    if (!['es', 'en'].includes(defaultLenguage)) {
      
      defaultLenguage = 'es';
      localStorage.setItem('locale', defaultLenguage);
    }
    translate.setDefaultLang(defaultLenguage || 'es');
  }
  public async switchLanguage(language: 'es' | 'en') {
    localStorage.setItem('locale', language);
    return await this.translate.use(language);

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }


  ngOnInit(): void {



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

        return routeTitle;
      })
    ).subscribe((title: string) => {

          const titleKey = title || '';
          this.translate.get('data.title.portfolio').subscribe((translatedTitle: string) => {
            this.titleService.setTitle(`${translatedTitle} Hans López - ${titleKey}`);
          });

    });
  }

}
