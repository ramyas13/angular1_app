import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SearchComponent } from './search/search.component';
import { CardsComponent } from './cards/cards.component';
import { QueryComponent } from './query/query.component';
import { ExtraComponent } from './extra/extra.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { BirthdaysofferComponent } from './birthdays/birthdaysoffer/birthdaysoffer.component';
import { AnnivarsaryComponent } from './annivarsary/annivarsary.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { DealsComponent } from './deals/deals.component';
import { DealsdealComponent } from './deals/dealsdeal/dealsdeal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    SearchComponent,
    CardsComponent,
    QueryComponent,
    ExtraComponent,
    AllproductsComponent,
    BirthdaysComponent,
    BirthdaysofferComponent,
    AnnivarsaryComponent,
    AdvertisementComponent,
    DealsComponent,
    DealsdealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
