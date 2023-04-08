import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { Router } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(public translate: TranslateService) {
    let defaultLenguage = localStorage.getItem('locale') || 'es';

    if (!['es', 'en'].includes(defaultLenguage)) {
      defaultLenguage = 'es';
      localStorage.setItem('locale', defaultLenguage);
    }

    translate.setDefaultLang(defaultLenguage || 'es');
  }
}
