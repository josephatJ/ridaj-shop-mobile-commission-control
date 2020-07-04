import { createAction, props } from '@ngrx/store';

export const loadCommissions = createAction('[Commissions] load Commissions');

export const addLoadedCommissions = createAction(
  '[Commissions] add loaded Commissions',
  props<{ commissions: any }>()
);

export const loadingCommissionsFail = createAction(
  '[Commissions] loading Commissions fail',
  props<{ error: any }>()
);
