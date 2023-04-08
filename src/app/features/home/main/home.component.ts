import { AfterViewInit, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  
  repository;
  loading = true;

  ngAfterViewInit() {

  }

  constructor(private sanitizer:DomSanitizer) { 
    this.repository = sanitizer.bypassSecurityTrustUrl('https://github.com/hnslopez/sistema-gestion-tareas');
  }

}
