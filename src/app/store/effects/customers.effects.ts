import { Injectable } from '@angular/core';
import { LoadDataService } from 'src/app/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  loadCustomers,
  addLoadedCustomers,
  loadingCustomersFail
} from '../actions';
import { switchMap, catchError, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { formatCustomersList } from 'src/app/pages/home/helpers';

@Injectable()
export class CustomersEffects {
  constructor(
    private dataService: LoadDataService,
    private actions$: Actions
  ) {}

  customers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCustomers),
      switchMap(() =>
        this.dataService.loadCustomers().pipe(
          map(customers =>
            addLoadedCustomers({ customers: formatCustomersList(customers) })
          ),
          catchError(error => of(loadingCustomersFail({ error })))
        )
      )
    )
  );
}
