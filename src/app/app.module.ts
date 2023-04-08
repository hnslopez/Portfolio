import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { AppInitializerProvider } from './app-initializer.service';
import { IconsProviderModule } from './icon-provider.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { FeaturesModule } from './features/features.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { InputComponent } from './shared/components/input/input.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { RibbonComponent } from './shared/components/ribbon/ribbon.component';
import { CoreModule } from './core/core.module';


registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    InputComponent,
    RibbonComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    FeaturesModule,
    AppRoutingModule,
    FormsModule,
    NzOverlayModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

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
    NzPopoverModule

    
  ],
  providers: [AppInitializerProvider,{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}