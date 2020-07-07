import { createSelector } from '@ngrx/store';

import { getRootState, State } from '../reducers';
import { commissionsAdapter } from '../states/commissions.states';

import * as _ from 'lodash';
import { getTotalCustomerCommissionValue } from 'src/app/pages/home/helpers';

export const getCommissionsState = createSelector(
  getRootState,
  (state: State) => state.commissions
);

export const {
  selectIds: getCommissionsIds,
  selectEntities: getCommissionsEntities,
  selectAll: getAllCommissions,
  selectTotal: getTotalCommissions
} = commissionsAdapter.getSelectors(getCommissionsState);

export const getCommissionsLoadedState = createSelector(
  getCommissionsState,
  state => state.loaded
);

export const getCommissionsLoadingState = createSelector(
  getCommissionsState,
  state => state.loading
);

export const getCommissionById = createSelector(
  getCommissionsEntities,
  (entities, props) => entities[props.id]
);

export const getCommissionsByCustomerId = createSelector(
  getAllCommissions,
  (commissions, props) =>
    commissions && commissions.length > 0
      ? _.filter(commissions, { customerid: parseInt(props.id) })
      : []
);

export const getTotalCustomerCommissions = createSelector(
  getAllCommissions,
  (commissions, props) =>
    commissions && commissions.length > 0
      ? getTotalCustomerCommissionValue(
          _.filter(commissions, { customerid: parseInt(props.id) })
        )
      : 0
);

export const getMaxCommissionId = createSelector(
  getAllCommissions,
  customers =>
    _.orderBy(customers, ['commissionid'], ['desc'])[0]['commissionid']
);
