import {createSelector} from "@ngrx/store";
import {CurrencyModel, CurrencyState, getCurrencyState} from "./currency.reducer";
import {CurrencyPair} from "../models/currency.model";

export const getCurrencyStateSelector = createSelector(
    getCurrencyState,
    (state: CurrencyState) => state.data
);

export const getLoadingState = createSelector(
    getCurrencyStateSelector,
    (state: CurrencyModel) => state.loading
)

export const getPairData = (currencyPair: CurrencyPair) => createSelector(
    getCurrencyStateSelector,
    (state: CurrencyModel) => state?.pairs?.[currencyPair.fromCurrency]?.data?.[currencyPair.toCurrency]
);
