import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BuyComponentComponent } from './buy-component/buy-component.component';

const routes: Routes = [
  {path:'login',component:LandingPageComponent},
  {path:'home',component:BuyComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
