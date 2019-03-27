import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shareComponents/header/header.component';
import { FooterComponent } from './shareComponents/footer/footer.component';
import { InnerCateringSearchComponent } from './inner-catering-search/inner-catering-search.component';
import { InnerSearchComponent } from './inner-search/inner-search.component';
import { InnerheaderComponent } from './shareComponents/innerheader/innerheader.component';
import { InnerFooterComponent } from './shareComponents/inner-footer/inner-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    InnerCateringSearchComponent,
    InnerSearchComponent,
    InnerheaderComponent,
    InnerFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
