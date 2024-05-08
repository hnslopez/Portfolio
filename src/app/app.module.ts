import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppInitializerProvider } from './app-initializer.service';
import { HomeComponent } from './features/home/home.component';
import { NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { IconsProviderModule } from './icon-provider.module';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { CardComponent } from './shared/components/card/card.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { TagComponent } from './shared/components/tag/tag.component';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { CanvasComponentimplements } from './shared/components/canvas/canvas.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    TagComponent,
    CanvasComponentimplements

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NzOverlayModule,
    NzInputModule,
    NzAutocompleteModule,
    NzLayoutModule,
    NzMenuModule,
    NzDropDownModule,
    NzGridModule,
    NzDrawerModule,
    NzAvatarModule,
    NzButtonModule,
    NzDividerModule,
    NzSelectModule,
    NzSwitchModule,
    IconsProviderModule,
    NzCollapseModule,
    NzBadgeModule,
    NzListModule,
    NzCardModule,
    NzTabsModule,
    NzSegmentedModule,
    NzToolTipModule,
    NzPopoverModule,
    NzAnchorModule,
    NzTypographyModule,
    NzIconModule,
    NzNotificationModule,
    NzTagModule,
    NzSpaceModule,
    CdkVirtualScrollViewport,
    ScrollingModule,
    NzAffixModule,
    NzCarouselModule,
    NzTimelineModule,
    NzBackTopModule,
    NzSkeletonModule,
    NzSpinModule
  ],
  providers: [AppInitializerProvider,
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
