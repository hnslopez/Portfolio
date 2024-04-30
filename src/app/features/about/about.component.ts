import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  companies: any[] = [];
  
  gridStyle = {
    width: '100%',
    textAlign: 'left'
  };

  constructor(private translate: TranslateService) {

    this.translate.get('about.jobs').subscribe((companies: any[]) => {
      this.companies = companies.map(company => ({
        ...company
      }));
    });
  }

  transformarId(titulo: string): string {
    return titulo.replace(/\s/g, "-");
  }
}