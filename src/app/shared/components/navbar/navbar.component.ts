import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  @ViewChild('navbarModel')
  elementRef!: ElementRef<HTMLElement>;

  linkedin: any;
  github: any;
  mail: any;
  fileUrl: any;
  visible = false;
  isMobile = false;


  constructor(private sanitizer:DomSanitizer){
    this.linkedin = sanitizer.bypassSecurityTrustUrl('https://www.linkedin.com/in/hnslopez/');
    this.github = sanitizer.bypassSecurityTrustUrl('https://github.com/hnslopez');
    this.mail = sanitizer.bypassSecurityTrustUrl('mailto:hans.lopezaranda@gmail.com');
    this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl('.././assets/CV_HANS_LOPEZ_2024.pdf');
  }
 
  ngOnInit() {
    this.onResize();
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }

}
