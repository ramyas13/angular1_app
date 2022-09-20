import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { QueryComponent } from './query/query.component';
import { ExtraComponent } from './extra/extra.component';
import { AnnivarsaryComponent } from './annivarsary/annivarsary.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { DealsdealComponent } from './deals/dealsdeal/dealsdeal.component';
import { RegisterComponent } from './register/register.component';
import { MoreComponent } from './more/more.component';

const routes: Routes = [
  {path:'',component:CarouselComponent},
  {path:'cards',component:CardsComponent},
  {path:'query',component:QueryComponent},
  {path:'extra',component:ExtraComponent},
  {path:'annivarsary',component:AnnivarsaryComponent},
  {path:'birthdays',component:BirthdaysComponent},
  {path:'deals',component:DealsdealComponent},
  {path:'register',component:RegisterComponent},
  {path:'more',component:MoreComponent},
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
