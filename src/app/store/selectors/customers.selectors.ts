import { createSelector } from '@ngrx/store';

import { getRootState, State } from '../reducers';
import { customersAdapter } from '../states/customers.states';
import * as _ from 'lodash';

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

export const getMaxCustomerId = createSelector(
  getAllCustomers,
  customers => _.orderBy(customers, ['customerid'], ['desc'])[0]['customerid']
);
