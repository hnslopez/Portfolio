import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() title!: string;
  @Input() description!: HTMLElement;
  @Input() imageUrl!: string;
  @Input() alt!: string;
  @Input() route?: string;
  @Input() loading: boolean = false;
  @Input() footer?: boolean = false;
  @Input() size?: number;
  @Input() extra?: boolean;
  @Input() zoomImage?:number =  1;
  @Input() preview?:boolean =  false;

  @ContentChild('action', { read: TemplateRef }) actionShared: TemplateRef<any> | undefined;


  constructor() {
    
   }

  ngOnInit(): void {
    if(!this.imageUrl) return;
    this.loading = true;
    this.preloadImage();

  }

  preloadImage() {
    const imagePath = this.imageUrl; 
    const img = new Image();
    img.src = imagePath;
    img.onload = () => {
      this.imageUrl = imagePath;
      this.loading = false
    };
    img.onerror = () => {
      console.error("Failed to preload image");
    };
  }
}
