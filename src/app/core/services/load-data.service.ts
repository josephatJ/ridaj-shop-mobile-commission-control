import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadDataService {
  constructor(private httpClient: HttpClient) {}

  loadCustomers(): Observable<any> {
    return this.httpClient.get('../../../api/customers');
  }

  getCustomerById(id): Observable<any> {
    return this.httpClient.get('../../../api/customers/' + id);
  }

  getCommissions(): Observable<any> {
    return this.httpClient.get('../../../api/commissions');
  }

  saveCustomer(data): Observable<any> {
    return this.httpClient.post('../../../api/customers', data);
  }

  saveCommission(data): Observable<any> {
    return this.httpClient.post('../../../api/commissions', data);
  }
}
