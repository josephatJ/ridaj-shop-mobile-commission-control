import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { pages } from './pages';
import { CustomersComponent } from './pages/customers/customers.component';
import { HeaderComponent } from './components/header/header.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CommissionsListComponent } from './components/commissions-list/commissions-list.component';
import { NewCustomerComponent } from './pages/new-customer/new-customer.component';
import { NewCommissionComponent } from './pages/new-commission/new-commission.component';

@NgModule({
  declarations: [...pages, CustomersComponent, HeaderComponent, CustomersListComponent, CustomerComponent, CommissionsListComponent, NewCustomerComponent, NewCommissionComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {}
