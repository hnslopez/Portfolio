import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";



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

  index = 1;

  tecnoKeys: string[];


  tecnologies: any = {
    "programmingLanguages": [
      {
        "name": "JavaScript (NodeJS)",
        "icon": "fa-brands fa-node",
        "type": "web",
        "librariesFrameworks": [
          {
            "name": "NestJS",
            "icon": "fab fa-node-js"
          },
          {
            "name": "Angular",
            "icon": "fab fa-angular"
          },
          {
            "name": "Express",
            "icon": "fas carbon--express"
          },
          {
            "name": "Ionic",
            "icon": "fab fa-ionic"
          }
        ]
      },
      {
        "name": "Typescript",
        "type": "web",
        "icon": "fa-brands mdi--language-typescript",
        "librariesFrameworks": [
          {
            "name": "NestJS",
            "icon": "fab fa-node-js"
          },
          {
            "name": "Angular",
            "icon": "fab fa-angular"
          },
          {
            "name": "Express",
            "icon": "fas fa-server"
          },
          {
            "name": "Ionic",
            "icon": "fab fa-ionic"
          }
        ]
      },
      {
        "name": "PHP",
        "icon": "fab fa-php",
        "type": "web",
        "librariesFrameworks": []
      },
      {
        "name": "Python 3",
        "icon": "fab fa-python",
        "type": "cloud",
        "librariesFrameworks": [
          {
            "name": "Django",
            "icon": "fab fa-python"
          }
        ]
      },
      {
        "name": "Java",
        "icon": "fab fa-java",
        "type": "cloud",
        "librariesFrameworks": []
      },
      {
        "name": "Salesforce",
        "icon": "fab fa-salesforce",
        "type": "cloud",
        "librariesFrameworks": []
      }
    ],
    "databases": [
      {
        "name": "MySQL",
        "icon": "fas tabler--brand-mysql"
      },
      {
        "name": "Oracle",
        "icon": "fas fa-database"
      },
      {
        "name": "MongoDB",
        "icon": "fas vscode-icons--file-type-mongo"
      },
      {
        "name": "SQL Server",
        "icon": "fas ph--file-sql-thin"
      },
      {
        "name": "Data Modeling",
        "icon": "fa-solid carbon--data-class"
      }
    ],
    "technologiesTools": [
      {
        "name": "API REST",
        "icon": "fas ant-design--api-outlined"

      },
      {
        "name": "JQuery",
        "icon": "fab mdi--jquery"
      },
      {
        "name": "JWT",
        "icon": "fas logos--jwt",
      },
      {
        "name": "Testing (Jest)",
        "icon": "fas vscode-icons--file-type-testjs"
      },
      {
        "name": "Postman",
        "icon": "fas carbon--api-1"
      },
      {
        "name": "Power BI",
        "icon": "fas fa-chart-pie"

      },
      {
        "name": "Looker",
        "icon": "fas fa-chart-line"
      }
    ],
    "methodologies": [
      {
        "name": "Scrum",
        "icon": "fas fa-rectangle-list",
        "type": "methodology"
      },
      {
        "name": "Kanban",
        "icon": "fas fa-clipboard-list",
        "type": "methodology"
      },
      {
        "name": "Metodologías clásicas",
        "icon": "fas fa-cogs",
        "type": "methodology"
      },
      {
        "name": "CRISP-DM",
        "icon": "fas fa-project-diagram",
        "type": "methodology"
      }
    ],
    "cloudTechnologies": [
      {
        "name": "Pub/Sub",
        "icon": "fas carbon--flow-data",
        "type": "cloud"
      },
      {
        "name": "Dataprep",
        "icon": "fas tabler--brand-google-dataprep",
        "type": "cloud"
      },
      {
        "name": "BigQuery",
        "icon": "fas tabler--brand-google-big-query",
        "type": "cloud"
      }
    ]
  }





  constructor(private translate: TranslateService) {

    this.tecnoKeys = Object.keys(this.tecnologies);

    console.log(this.tecnologies[this.tecnoKeys[0]])

    this.translate.get('about.jobs').subscribe((companies: any[]) => {
      this.companies = companies.map(company => ({
        ...company
      }));
    });
  }

  transformarId(titulo: string): string {
    return titulo.replace(/\s/g, "-");
  }


  keyValues(index: number): string {
    console.log(index)
    return Object.keys(this.tecnologies)[index];
  }

}