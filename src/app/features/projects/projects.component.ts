import { Component, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import axios from 'axios';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  data: any = [];
  projects: any[] = [];

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
      let data = response.data;
      if (typeof data === 'object') {
        console.log(data)
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
      console.log(this.projects)
    });
  }
}
