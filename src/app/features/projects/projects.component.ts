import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import axios from 'axios';
import { trigger, transition, style, animate, sequence, keyframes, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class ProjectsComponent {

  data: any = [];
  projects: any[] = [];
  loading:boolean = true;

  constructor(private sanitizer: DomSanitizer, private translate: TranslateService) {

  }
  ngOnInit(){
    this.data = this.getData();
    this.getProjects();
  }	

  async getData() {
    const url = `https://api.github.com/users/hnslopez/repos`;
    const satinizeUrl = this.sanitizer.sanitize(SecurityContext.URL, url);

    try {
      const response = await axios.get(satinizeUrl!);
      let data = response.data.reverse();
      if (typeof data === 'object') {
        this.loading = false;
        return data;
      }
    } catch (error: any) {

      console.error(`${error.message}`);
    }

  }

  async getProjects() {
    this.translate.get('projects.others.projects').subscribe((projects: any[]) => {
      this.projects = projects.map(project => ({
        ...project
      }));
    });
  }
}
