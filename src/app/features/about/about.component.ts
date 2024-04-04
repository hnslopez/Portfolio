import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  selectedCompany: any;

  companies: any[] = [];

  constructor(private translate: TranslateService) {

    this.translate.get('about.jobs').subscribe((companies: any[]) => {
      this.companies = companies.map(company => ({
        ...company
      }));
    });
  }

  showJobs(company: any) {
    this.selectedCompany = company;
  }
}