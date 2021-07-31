import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegMerchantsComponent } from './reg-merchants/reg-merchants.component';
import { RegMerchantDetailsComponent } from './regMerchants/reg-merchant-details/reg-merchant-details.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeScreenComponent
  },
  {
    path: 'regMerchants',
    component: RegMerchantsComponent
  },
  {
    path: 'regMerchantsDetails',component: RegMerchantDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
