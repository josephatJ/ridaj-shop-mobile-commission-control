import { createAction, props } from '@ngrx/store';

export const loadCustomers = createAction('[customers] load customers');

export const addLoadedCustomers = createAction(
  '[customers] add loaded customers',
  props<{ customers: any }>()
);

export const loadingCustomersFail = createAction(
  '[customers] loading customers fail',
  props<{ error: any }>()
);
