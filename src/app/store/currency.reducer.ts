import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {Injectable, InjectionToken} from "@angular/core";
import {CurrencyActions, CurrencyActionType} from "./currency.actions";

export interface CurrencyState {
    data: CurrencyModel;
}

export interface CurrencyModel {
    pairs: {
        [key: string]: any;
    };
    loading: boolean;
}

export const currencyStateKey = 'currency';

export const CURRENCY_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<CurrencyState>>(currencyStateKey);

export function getCurrencyReducers(reducerService: CurrencyReducerService): ActionReducerMap<CurrencyState> {
    return reducerService.getReducers();
}

export const getCurrencyState = createFeatureSelector<CurrencyState>(currencyStateKey);

export const CURRENCY_INITIAL_STATE: CurrencyModel = {
    pairs: {},
    loading: false,
};

@Injectable()
export class CurrencyReducerService {
    getReducers(): ActionReducerMap<CurrencyState> {
        return {
            data: this.reducer.bind(this),
        };
    }

    reducer(
        state: CurrencyModel = CURRENCY_INITIAL_STATE,
        action: CurrencyActions
    ): CurrencyModel {
        switch (action.type) {
            case CurrencyActionType.GET_PAIR_DATA: {
                return {
                    ...state,
                }
            }
            case CurrencyActionType.GET_PAIR_DATA_SUCCESS: {
                return {
                    ...state,
                    pairs: action.response,
                };
            }
            case CurrencyActionType.SET_LOADING: {
                return {
                    ...state,
                    loading: action.isLoading
                }
            }
            default:
                return state;
        }
    }
}
