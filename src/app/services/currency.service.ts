import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CurrencyPairModelResponse, CurrencyType} from "../models/currency.model";

@Injectable({
    providedIn: 'root'
})
export class CurrencyService {
    private apiUrl = 'https://api.currencyapi.com/';
    private apiKey = 'cur_live_FNffaK8h66o5uShu0Eh0NiUVnhroBxSOMc1jkD7j';

    constructor(private http: HttpClient) { }

    getCurrencyData(baseCurrency: CurrencyType): Observable<CurrencyPairModelResponse> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'apikey': this.apiKey
        });

        const params = {
            currencies: 'EUR,USD,UAH',
            base_currency: baseCurrency
        };
        return this.http.get<CurrencyPairModelResponse>(this.apiUrl + 'v3/latest', { headers: headers, params: params });
    }
}
