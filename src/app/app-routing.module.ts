import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { CardsComponent } from './cards/cards.component';
import { QueryComponent } from './query/query.component';
import { ExtraComponent } from './extra/extra.component';
const routes: Routes = [
  {path:'',component:CarouselComponent},
  {path:'cards',component:CardsComponent},
  {path:'query',component:QueryComponent},
  {path:'extra',component:ExtraComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
