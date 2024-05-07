import { Component, Input, OnInit } from '@angular/core';

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
  @Input() loading?: boolean;
  @Input() footer?: boolean = false;
  @Input() size?: number;
  @Input() extra?: boolean;

  constructor() { }

  ngOnInit(): void {
  }
}
