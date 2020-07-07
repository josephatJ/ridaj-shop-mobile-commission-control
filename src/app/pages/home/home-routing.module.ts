import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { NewCommissionComponent } from './pages/new-commission/new-commission.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'customer/:id',
    component: CustomerComponent
  },
  {
    path: 'new/customer/:id',
    component: NewCustomerComponent
  },
  {
    path: 'new/commission/:id/:commId',
    component: NewCommissionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
