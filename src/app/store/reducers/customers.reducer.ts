import { createReducer, on } from '@ngrx/store';
import {
  initialCustomersState,
  customersAdapter
} from '../states/customers.states';
import {
  loadCustomers,
  addLoadedCustomers,
  loadingCustomersFail
} from '../actions';

const reducer = createReducer(
  initialCustomersState,
  on(loadCustomers, state => ({
    ...state,
    loading: true,
    loaded: false
  })),
  on(addLoadedCustomers, (state, { customers }) =>
    customersAdapter.addMany(customers, {
      ...state,
      loading: false,
      loaded: true
    })
  ),
  on(loadingCustomersFail, (state, { error }) => ({
    ...state,
    hasError: true,
    error: error,
    loaded: true,
    loading: false
  }))
);

export function customersReducer(state, action) {
  return reducer(state, action);
}
