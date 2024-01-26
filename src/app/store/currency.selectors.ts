import {createSelector} from "@ngrx/store";
import {CurrencyState, getCurrencyState} from "./currency.reducer";
import {CurrencyType} from "../models/currency.model";

export const getCurrencyStateSelector = createSelector(
    getCurrencyState,
    (state: CurrencyState) => state.data
);

export const getPairData = (currencyType: CurrencyType) => createSelector(
    getCurrencyState,
    (state: CurrencyState) => state.data.pairs[currencyType]
);
