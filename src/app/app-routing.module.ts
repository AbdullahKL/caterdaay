import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InnerSearchComponent } from './inner-search/inner-search.component';
import { InnerCateringSearchComponent } from './inner-catering-search/inner-catering-search.component';
import { CartComponent } from './shareComponents/cart/cart.component';
const routes: Routes = [
  {
    path: 'detail/:id ',
    component: InnerCateringSearchComponent
  },
  {
    path: 'listing',
    component: InnerSearchComponent
  },
  {
    path: 'card',
    component: CartComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: '**', component: DashboardComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
