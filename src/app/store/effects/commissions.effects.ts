import { Injectable } from '@angular/core';
import { LoadDataService } from 'src/app/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  loadCommissions,
  addLoadedCommissions,
  loadingCommissionsFail
} from '../actions';
import { switchMap, catchError, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { formatCommissions } from 'src/app/pages/home/helpers';
// import { formatCommissionsList } from 'src/app/pages/home/helpers';

@Injectable()
export class CommissionsEffects {
  constructor(
    private dataService: LoadDataService,
    private actions$: Actions
  ) {}

  commissions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCommissions),
      switchMap(() =>
        this.dataService.getCommissions().pipe(
          map(commissions =>
            addLoadedCommissions({
              commissions: formatCommissions(commissions)
            })
          ),
          catchError(error => of(loadingCommissionsFail({ error })))
        )
      )
    )
  );
}
