import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
export interface CustomersState extends EntityState<any> {
  loading: boolean;
  loaded: boolean;
  hasError: boolean;
  error: any;
}

export const customersAdapter: EntityAdapter<any> = createEntityAdapter<any>();

export const initialCustomersState = customersAdapter.getInitialState({
  loading: false,
  loaded: false,
  hasError: false,
  error: null
});
