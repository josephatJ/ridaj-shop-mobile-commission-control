import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { environment } from '../../../environments/environment';
import { CustomersState } from '../states/customers.states';
import { customersReducer } from './customers.reducer';
import { CommissionsState } from '../states/commissions.states';
import { commissionsReducer } from './commissions.reducer';

/**
 * Root state interface
 */
export interface State {
  customers: CustomersState;
  commissions: CommissionsState;
}

export const reducers: ActionReducerMap<State> = {
  customers: customersReducer,
  commissions: commissionsReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

/**
 * Root state selector
 * @param {State} state
 * @returns {State} state
 */
export const getRootState = (state: State) => state;
