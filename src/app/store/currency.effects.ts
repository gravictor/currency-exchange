import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {switchMap, map, mergeMap} from 'rxjs/operators';
import { CurrencyService } from "../services/currency.service";
import { CurrencyActionType, GetPairDataAction, GetPairDataSuccessAction } from "./currency.actions";
import {CurrencyPairModelResponse} from "../models/currency.model";

@Injectable()
export class CurrencyEffects {
    constructor(
        private actions$: Actions,
        private currencyService: CurrencyService
    ) {}

    loadPairData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CurrencyActionType.GET_PAIR_DATA),
            mergeMap((action: GetPairDataAction) =>
                this.currencyService.getCurrencyData(action.baseCurrency).pipe(
                    map((response: CurrencyPairModelResponse) => new GetPairDataSuccessAction(response, action.baseCurrency)),
                )
            )
        )
    );
}
