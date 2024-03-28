import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { ThemeService } from 'src/app/theme.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  year!: number;
  linkedin: any;
  github: any;
  mail: any;

  readonly language = [
    {value:"es",name:'Español'},
    {value:"en", name:'English'}
  ];
  selectedValue!: 'es' | 'en';

  constructor(private sanitizer:DomSanitizer, private app: AppComponent, private themeService: ThemeService,private notification: NzNotificationService, private translateService: TranslateService) { 
    this.linkedin = sanitizer.bypassSecurityTrustUrl('https://www.linkedin.com/in/hnslopez/');
    this.github = sanitizer.bypassSecurityTrustUrl('https://github.com/hnslopez');
    this.mail = sanitizer.bypassSecurityTrustUrl('https://github.com/hnslopez');

  }

  //trackBy 
  trackByValue(index: number, language:any):string{
    return language.value;
}


 async languageChange(params:any) {
  this.app.switchLanguage(params);
  
  const notificactionTitle = this.translateService.instant('components.notification.changeLanguage.title');
  const notificactionDescription = this.translateService.instant('components.notification.changeLanguage.description');

  await this.notification.create(
    'success',
    notificactionTitle,
    notificactionDescription
  );
}


  ngOnInit(): void {
    const languageValue =  localStorage.getItem('locale') as 'es' | 'en';
    this.selectedValue = languageValue || 'es';
    this.year = new Date().getFullYear();
  }

}
