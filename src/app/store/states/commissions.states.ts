import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
export interface CommissionsState extends EntityState<any> {
  loading: boolean;
  loaded: boolean;
  hasError: boolean;
  error: any;
}

export const commissionsAdapter: EntityAdapter<any> = createEntityAdapter<
  any
>();

export const initialCommissionsState = commissionsAdapter.getInitialState({
  loading: false,
  loaded: false,
  hasError: false,
  error: null
});
