import {Action} from '@ngrx/store';
import {CurrencyType} from "../models/currency.model";

export enum CurrencyActionType {
    GET_PAIR_DATA = '[Pair] Get Pair Data',
    GET_PAIR_DATA_SUCCESS = '[Currency] Get Pair Data Success',
    SET_LOADING = '[Currency] SetLoading',
}

export class GetPairDataAction implements Action {
    readonly type = CurrencyActionType.GET_PAIR_DATA;

    constructor(public baseCurrency: CurrencyType[]) {}
}

export class GetPairDataSuccessAction implements Action {
    readonly type = CurrencyActionType.GET_PAIR_DATA_SUCCESS;

    constructor(public response: any) {}
}

export class SetLoadingAction implements Action {
    readonly type = CurrencyActionType.SET_LOADING;

    constructor(public isLoading: boolean) {}
}

export type CurrencyActions = GetPairDataAction | GetPairDataSuccessAction | SetLoadingAction;

