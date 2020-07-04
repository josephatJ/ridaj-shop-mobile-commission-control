import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadDataService } from 'src/app/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import {
  getCustomersLoadedState,
  getAllCustomers,
  getMaxCustomerId
} from 'src/app/store/selectors';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers$: Observable<any>;
  customersLoadedState$: Observable<any>;
  maxIdForCustomers$: Observable<any>;
  constructor(
    private dataService: LoadDataService,
    private store: Store<State>
  ) {
    this.customers$ = this.store.select(getAllCustomers);
    this.customersLoadedState$ = this.store.select(getCustomersLoadedState);
    this.maxIdForCustomers$ = this.store.select(getMaxCustomerId);
  }

  ngOnInit(): void {}
}
