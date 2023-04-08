import { Component, Input, OnInit } from '@angular/core';
import { NzAutocompleteComponent } from 'ng-zorro-antd/auto-complete';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() inputValue!:string | null;
  @Input() cleaner?:boolean = false;
  @Input() icon?:string;
  @Input() placeholder?:string='';
  @Input() autoComplete?: NzAutocompleteComponent | null = null;
  @Input() status?:'error' | 'warning';
  @Input() borderless?:boolean = false;
  @Input() type?:string = 'text';

  constructor() { }

  ngOnInit(): void {
  }

}
