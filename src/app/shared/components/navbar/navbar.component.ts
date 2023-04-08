import { Component, Input, OnInit, EventEmitter, Output, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() isMobile!: boolean;
  isCollapsedNotification = false;
  visibleDrawer = false;
  visibleDropdown = false;
  visibleUserMenu = false;
  visibleUserMenuNotification = false;

  inputValue?: string;
  options: string[] = ['aasa','as'];

  placement: NzDrawerPlacement = 'bottom';

  menus = [{
    title: 'header.user.dropdown.profile.title', 
    icon: 'user', 
    submenus: [
      'header.user.dropdown.profile.view', 
      'header.user.dropdown.profile.edit', 
      'header.user.dropdown.profile.myAccount', 
      'header.user.dropdown.profile.notifications', 
      'header.user.dropdown.profile.recentActivity'
    ]
  },
  {
    title: 'header.user.dropdown.settings.title',
    icon: 'setting',
    submenus: [
      'header.user.dropdown.settings.changePassword',
      'header.user.dropdown.settings.preferences',
      'header.user.dropdown.settings.privacy',
      'header.user.dropdown.settings.security'
    ]
  },
  {
    title: 'header.user.dropdown.help.title',
    icon: 'question',
    submenus: [
      'header.user.dropdown.help.faq',
      'header.user.dropdown.help.documentation'
    ]
  },
  {
    title: 'header.user.dropdown.logout'
  }
  ];


  data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    },
    {
      title: 'Ant Design Title 4'
    }
  ];

  @Input() isCollapsed: boolean = false;
  @Output() toggleCollapsed = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isMobile']) {
      if (changes['isMobile'].currentValue && this.isCollapsedNotification) return this.closeDrawer();
      if (!changes['isMobile'].currentValue && this.isCollapsedNotification) return this.closeDrawer();
      if (!changes['isMobile'].currentValue && this.visibleUserMenu) return this.closeUserDrawer();

    }
  }

  openDropdown(): void {
    this.visibleDropdown = true;
    this.visibleDrawer = false;
    this.isCollapsedNotification = true;
  }

  onToggleMenu(): void {
    this.isCollapsed = !this.isCollapsed;
    this.toggleCollapsed.emit(this.isCollapsed);
  }

  openDrawer(): void {
    this.visibleDrawer = true;
    this.isCollapsedNotification = true;
    this.visibleDropdown = false;
    this.onDropdownVisibleChange(true);
  }

  closeDrawer(): void {
    this.visibleDrawer = false;
    this.isCollapsedNotification = false;
    this.onDropdownVisibleChange(false);

  }

  openUserDrawer(): void {
    this.visibleUserMenu = true;
  }

  closeUserDrawer(): void {
    this.visibleUserMenu = false;
  }

  onDropdownVisibleChange(visible: boolean) {
    if (visible) {
      this.isCollapsedNotification = true;
      document.getElementById("bellIcon")!.style.opacity = "1";
    } else {
      document.getElementById("bellIcon")!.style.opacity = "";
      this.isCollapsedNotification = false;
    }
  }

  onDropdownUserVisibleChange(visible: boolean) {
    if (visible) {
      this.visibleUserMenuNotification = true;
      document.getElementById("userIcon")!.style.opacity = "1";
    } else {
      this.visibleUserMenuNotification = false;
      document.getElementById("userIcon")!.style.opacity = '';

    }
  }


}
