import * as _ from 'lodash';

export function formatCustomersList(customers) {
  let list = [];
  _.each(_.orderBy(customers, ['created'], ['desc']), (customer, index) => {
    list.push({
      no: index + 1,
      phone: customer.phone,
      provider: customer.provider,
      status: customer.active ? customer.active : customer.status,
      customerid: customer.customerid,
      id: customer.customerid,
      created: customer.created
    });
  });
  return list;
}

export function formatCommissions(commissions) {
  let list = [];
  _.each(commissions, (commission, index) => {
    list.push({
      no: index + 1,
      commission: commission.commission,
      customercommission: commission.customercommission,
      percentused: commission.percentused,
      transaction: commission.transaction,
      customerid: commission.customerid,
      commissionid: commission.commissionid,
      id: commission.commissionid,
      created: formatDateYYMMDD(commission.created)
    });
  });
  return list;
}

export function formatDateYYMMDD(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}
