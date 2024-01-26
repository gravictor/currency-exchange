import {Action} from '@ngrx/store';
import {CurrencyPairModelResponse, CurrencyType} from "../models/currency.model";

export enum CurrencyActionType {
    GET_PAIR_DATA = '[Pair] Get Pair Data',
    GET_PAIR_DATA_SUCCESS = '[Currency] Get Pair Data Success',
}

export class GetPairDataAction implements Action {
    readonly type = CurrencyActionType.GET_PAIR_DATA;

    constructor(public baseCurrency: CurrencyType) {}
}

export class GetPairDataSuccessAction implements Action {
    readonly type = CurrencyActionType.GET_PAIR_DATA_SUCCESS;

    constructor(public response: CurrencyPairModelResponse, public baseCurrency: CurrencyType) {}
}

export type CurrencyActions = GetPairDataAction | GetPairDataSuccessAction;

