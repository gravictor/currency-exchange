import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, finalize } from 'rxjs/operators';
import { CurrencyService } from "../services/currency.service";
import {
    CurrencyActionType,
    GetPairDataAction,
    GetPairDataSuccessAction,
    SetLoadingAction,
} from "./currency.actions";
import {combineLatest, of} from "rxjs";
import {Store} from "@ngrx/store";

@Injectable()
export class CurrencyEffects {
    constructor(
        private actions$: Actions,
        private store$: Store,
        private currencyService: CurrencyService
    ) {}

    loadPairData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CurrencyActionType.GET_PAIR_DATA),
            mergeMap((action: GetPairDataAction) =>
                of(this.store$.dispatch(new SetLoadingAction(true))).pipe(
                    finalize(() => this.store$.dispatch(new SetLoadingAction(false))),
                    mergeMap(() => {
                        const requests = action.baseCurrency.map(currency =>
                            this.currencyService.getCurrencyData(currency).pipe(
                                catchError(error => {
                                    console.error('Error fetching data for currency', currency, error);
                                    return of(null);
                                })
                            )
                        );

                        return combineLatest(requests, (...responsesArray) => {
                            const pairs = {};
                            responsesArray.forEach((response, index) => {
                                pairs[action.baseCurrency[index]] = response;
                            });
                            return new GetPairDataSuccessAction(pairs);
                        });
                    })
                )
            )
        )
    );
}
