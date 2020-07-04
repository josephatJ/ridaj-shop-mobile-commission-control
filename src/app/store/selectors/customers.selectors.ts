import { createSelector } from '@ngrx/store';

import { getRootState, State } from '../reducers';
import { customersAdapter } from '../states/customers.states';

export const getCustomersState = createSelector(
  getRootState,
  (state: State) => state.customers
);

export const {
  selectIds: getCustomersIds,
  selectEntities: getCustomersEntities,
  selectAll: getAllCustomers,
  selectTotal: getTotalCustomers
} = customersAdapter.getSelectors(getCustomersState);

export const getCustomersLoadedState = createSelector(
  getCustomersState,
  state => state.loaded
);

export const getCustomerLoadingState = createSelector(
  getCustomersState,
  state => state.loading
);

export const getCustomerById = createSelector(
  getCustomersEntities,
  (entities, props) => entities[props.id]
);
