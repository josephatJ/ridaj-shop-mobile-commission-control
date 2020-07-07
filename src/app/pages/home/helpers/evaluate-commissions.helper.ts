import * as _ from 'lodash';

export function getTotalCustomerCommissionValue(commissions) {
  let total = 0;
  _.each(commissions, commission => {
    total += Number(commission.customercommission);
  });
  return total;
}
