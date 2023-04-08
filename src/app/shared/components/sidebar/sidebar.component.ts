import { Component, EventEmitter, Input, OnInit , Output, DoCheck} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MenuSection } from 'src/app/core/models/menu-section.model';
import { ThemeService } from 'src/app/theme.service';
import { menuItems } from '../../data/menu-items.data';
import { ThemeType } from '../../enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})



export class SidebarComponent implements OnInit{
  @Input() isCollapsed = false;
  @Input() isMobile = false;
  @Output() isCollapsedChanged = new EventEmitter<boolean>();
  menuItems = menuItems;
  currentPath!: string;
  public ThemeType = ThemeType; 
  nzSelected= false;
  mode = false;

  public themeChanged$!: BehaviorSubject<ThemeType>;


  constructor(private router: Router, private themeService: ThemeService) {
  }


  ngOnInit(): void {
    this.themeChanged$ = this.themeService.getThemeChanged();

  }

  toggleTheme(): void {
    this.themeService.toggleTheme().then();
  }



  close(): void {
    this.isCollapsed = this.isCollapsed;
    this.isCollapsedChanged.emit(!this.isCollapsed);
  }
}
