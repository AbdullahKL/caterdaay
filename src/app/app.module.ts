import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shareComponents/header/header.component';
import { FooterComponent } from './shareComponents/footer/footer.component';
import { InnerCateringSearchComponent } from './inner-catering-search/inner-catering-search.component';
import { InnerSearchComponent } from './inner-search/inner-search.component';
import { InnerheaderComponent } from './shareComponents/innerheader/innerheader.component';
import { InnerFooterComponent } from './shareComponents/inner-footer/inner-footer.component';
import { ScrollEnteranceDirective } from './Directive/scroll-enterance.directive';
import { CartComponent } from './shareComponents/cart/cart.component';
import { BackToTopDirective } from './Directive/back-to-top.directive';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TestimonialsComponent } from './shareComponents/testimonials/testimonials.component';

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
    ScrollEnteranceDirective,
    CartComponent,
    BackToTopDirective,
    AboutUsComponent,
    ContactusComponent,
    TestimonialsComponent,
    
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
