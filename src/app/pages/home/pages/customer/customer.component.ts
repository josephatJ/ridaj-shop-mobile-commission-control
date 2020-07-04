import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { getCustomerById } from 'src/app/store/selectors';
import {
  getCommissionsByCustomerId,
  getAllCommissions,
  getCommissionsLoadedState
} from 'src/app/store/selectors/commissions.selectors';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer$: Observable<any>;
  customerCommissions$: Observable<any>;
  commissionsLoadedState$: Observable<boolean>;
  customerId: string;
  constructor(private route: ActivatedRoute, private store: Store<State>) {}

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    this.customer$ = this.store.select(getCustomerById, {
      id: this.route.snapshot.params['id']
    });

    this.commissionsLoadedState$ = this.store.select(getCommissionsLoadedState);
    this.customerCommissions$ = this.store.select(getCommissionsByCustomerId, {
      id: this.route.snapshot.params['id']
    });
  }
}
