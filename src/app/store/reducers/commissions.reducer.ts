import { createReducer, on } from '@ngrx/store';
import {
  initialCommissionsState,
  commissionsAdapter
} from '../states/commissions.states';
import {
  loadCommissions,
  addLoadedCommissions,
  loadingCommissionsFail
} from '../actions';

const reducer = createReducer(
  initialCommissionsState,
  on(loadCommissions, state => ({
    ...state,
    loading: true,
    loaded: false
  })),
  on(addLoadedCommissions, (state, { commissions }) =>
    commissionsAdapter.addMany(commissions, {
      ...state,
      loading: false,
      loaded: true
    })
  ),
  on(loadingCommissionsFail, (state, { error }) => ({
    ...state,
    hasError: true,
    error: error,
    loaded: true,
    loading: false
  }))
);

export function commissionsReducer(state, action) {
  return reducer(state, action);
}
