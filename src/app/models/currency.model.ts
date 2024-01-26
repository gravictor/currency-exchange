export interface CurrencyPairModelResponse {
    data: {
        [key: string]: CurrencyPair;
    }
    meta: {
        last_updated_at: string;
    }
}

export interface CurrencyPair {
    code: string;
    value: string;
}

export enum CurrencyType {
    UAH = 'UAH',
    USD = 'USD',
    EUR = 'EUR'
}
