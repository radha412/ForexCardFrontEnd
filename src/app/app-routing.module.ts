import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponentComponent } from './buy-component/buy-component.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path:'',component:BuyComponentComponent
  },
  {
    path:'payment',component:PaymentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
