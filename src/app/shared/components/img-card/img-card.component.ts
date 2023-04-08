import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imageUrl!: string;
  @Input() alt!: string;
  @Input() route?: string;
  @Input() loading?: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
