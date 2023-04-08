import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year!: number;
  linkedin: any;
  github: any;
  
  readonly language = [
    {value:"es",name:'Español'},
    {value:"en", name:'English'}
  ];
  selectedValue!: 'es' | 'en';

  constructor(private sanitizer:DomSanitizer, private app: AppComponent, private themeService: ThemeService) { 
    this.linkedin = sanitizer.bypassSecurityTrustUrl('https://www.linkedin.com/in/hnslopez/');
    this.github = sanitizer.bypassSecurityTrustUrl('https://github.com/hnslopez');
  }

  //trackBy 
  trackByValue(index: number, language:any):string{
    return language.value;
}


languageChange(params:any) {
  this.app.switchLanguage(params);
}


  ngOnInit(): void {
    const languageValue =  localStorage.getItem('locale') as 'es';
    this.selectedValue = languageValue || 'es';
    this.year = new Date().getFullYear();
  }

}
