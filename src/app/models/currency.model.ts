export interface CurrencyPairModelResponse {
    data: {
        [key: string]: CurrencyData;
    }
    meta: {
        last_updated_at: string;
    }
}

export interface CurrencyData {
    code: string;
    value: string;
}

export interface CurrencyPair {
    fromCurrency: CurrencyType;
    toCurrency: CurrencyType;
}

export enum CurrencyType {
    UAH = 'UAH',
    USD = 'USD',
    EUR = 'EUR'
}
