import { Component, OnChanges, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from 'src/app/app.component';
import { ThemeService } from 'src/app/theme.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BehaviorSubject } from 'rxjs';
import { ThemeType } from '../../enum';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

  year!: number;
  linkedin: any;
  github: any;
  mail: any;
  public ThemeType = ThemeType; 

  public themeChanged$!: BehaviorSubject<ThemeType>;


  readonly language = [
    {value:"es",name:'Español'},
    {value:"en", name:'English'}
  ];
  selectedValue!: 'es' | 'en';

  constructor(private sanitizer:DomSanitizer, private app: AppComponent, private themeService: ThemeService,private notification: NzNotificationService, private translateService: TranslateService) { 
    this.linkedin = sanitizer.bypassSecurityTrustUrl('https://www.linkedin.com/in/hnslopez/');
    this.github = sanitizer.bypassSecurityTrustUrl('https://github.com/hnslopez');
    this.mail = sanitizer.bypassSecurityTrustUrl('mailto:hans.lopezaranda@gmail.com');
    

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

toggleTheme(): void {
  this.themeService.toggleTheme().then();
}


  ngOnInit(): void {
    const languageValue =  localStorage.getItem('locale') as 'es' | 'en';
    this.selectedValue = languageValue || 'es';
    this.year = new Date().getFullYear();
    this.themeChanged$ = this.themeService.getThemeChanged();

  }

}
