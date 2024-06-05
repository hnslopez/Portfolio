import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { trigger, transition, style, animate, stagger, query } from '@angular/animations';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css'],
  animations: [
    trigger('fadeAll', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0 }),
          stagger(700, [
            animate('1200ms', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ]
})
export class CertificatesComponent implements OnInit {

  badges: any[] = [
    {
      name: 'Salesforce Badges',
      image: 'Salesforce_Badges.jpg',
      url:'https://www.salesforce.com/trailblazer/hanslopez'
    },
    {
      name: 'Exploring Data with Looker',
      image: '2L8E9WsZ8Z5zUcUdTsOUSVt_N_aPk2Yg4iqHwDOHNNw=.png',
      url:'https://www.cloudskillsboost.google/public_profiles/0d655dcd-fc03-489a-86f6-dbb8df328f9d/badges/3538767'
    },
    {
      name: 'Google CLoud Essentials',
      image: 'xRejIPM4k6VgI8++2Nz5bFHFx8PwK0nn9oQofkJOsS4=.png',
      url:'https://www.cloudskillsboost.google/public_profiles/0d655dcd-fc03-489a-86f6-dbb8df328f9d/badges/3686341'
    },   
    {
      name: 'BigQuery for Data Warehousing',
      image: '8wZI+j18z5J5+HX7wspsQQSjLGGOlbQmx36HCAoLk_k=.png',
      url:'https://www.cloudskillsboost.google/public_profiles/0d655dcd-fc03-489a-86f6-dbb8df328f9d/badges/3699872'
    }
  ];

  certificates: any[] = [
    {
      name: 'Scrum Fundamentals Certified (SFC)',
      image: 'scrum-certificate.png',
      url:'https://www.scrumstudy.com/certification/verify?type=SFC&number=922461'
    },
    {
      name: 'Angular (Basic) Certificate',
      image: 'angular_basic certificate.jpg',
      url:'https://www.hackerrank.com/certificates/5533421f91a7'
    },
    {
      name: 'JavaScript (Intermediate) Certificate',
      image: 'javascript_intermediate certificate_page-0001.jpg',
      url:'https://www.hackerrank.com/certificates/392fdffb9cfb'
    },
    {
      name: 'Rest API (Intermediate) Certificate',
      image: 'rest_api_intermediate certificate_page-0001.jpg',
      url:'https://www.hackerrank.com/certificates/adc81e26c1e6'
    },
    {
      name: 'Node (Basic) Certificate',
      image: 'nodejs_basic certificate_page-0001.jpg',
      url:'https://www.hackerrank.com/certificates/2824e7b0607b'
    },
    {
      name: 'SQL (Intermediate) Certificate',
      image: 'sql_intermediate certificate_page-0001.jpg',
      url:'https://www.hackerrank.com/certificates/733d437e93d7'
    }

  ];

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {}

  getSanitizedUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
