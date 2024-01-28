import {Component, HostBinding, Input} from "@angular/core";
import {CurrencyData, CurrencyType} from "../../models/currency.model";
import {select, Store} from "@ngrx/store";
import {getPairData} from "../../store/currency.selectors";
import {take} from "rxjs";

@Component({
    selector: 'ce-currency-converter',
    templateUrl: 'currency-converter.component.html',
    styleUrls: ['currency-converter.component.scss']
})
export class CeCurrencyConverterComponent {
    @HostBinding('class.ce-currency-converter')
    hostClass: boolean = true;

    @Input() currencies: CurrencyType[];

    firstCurrencyAmount: number;
    firstSelectedCurrency: CurrencyType;

    secondCurrencyAmount: number;
    secondSelectedCurrency: CurrencyType;

    constructor(private store$: Store) {
    }

    convertCurrency1ToCurrency2(event: CurrencyType): void {
        this.firstSelectedCurrency = event;

        if (this.firstSelectedCurrency && this.secondSelectedCurrency && this.firstCurrencyAmount) {
            this.store$.pipe(
                take(1),
                select(getPairData({fromCurrency: this.firstSelectedCurrency, toCurrency: this.secondSelectedCurrency}))
            ).subscribe((result: CurrencyData) => {
                this.secondCurrencyAmount = Number((this.firstCurrencyAmount * result.value).toFixed(2));
            });
        } else if (this.firstSelectedCurrency && this.secondSelectedCurrency && this.secondCurrencyAmount) {
            this.convertCurrency2ToCurrency1(this.secondSelectedCurrency)
        }
    }

    select1(): void {
        if (this.firstSelectedCurrency && this.secondSelectedCurrency && this.firstCurrencyAmount) {
            this.store$.pipe(
                take(1),
                select(getPairData({fromCurrency: this.firstSelectedCurrency, toCurrency: this.secondSelectedCurrency}))
            ).subscribe((result: CurrencyData) => {
                this.secondCurrencyAmount = Number((this.firstCurrencyAmount * result.value).toFixed(2));
            });
        }
    }

    convertCurrency2ToCurrency1(event: CurrencyType): void {
        this.secondSelectedCurrency = event;

        if (this.firstSelectedCurrency && this.secondSelectedCurrency && this.secondCurrencyAmount) {
            this.store$.pipe(
                take(1),
                select(getPairData({fromCurrency: this.secondSelectedCurrency, toCurrency: this.firstSelectedCurrency}))
            ).subscribe((result: CurrencyData) => {
                this.firstCurrencyAmount = Number((this.secondCurrencyAmount * result.value).toFixed(2));
            });
        } else if (this.firstSelectedCurrency && this.secondSelectedCurrency && this.firstCurrencyAmount) {
            this.convertCurrency1ToCurrency2(this.firstSelectedCurrency);
        }
    }

    select2(): void {
        if (this.firstSelectedCurrency && this.secondSelectedCurrency && this.secondCurrencyAmount) {
            this.store$.pipe(
                take(1),
                select(getPairData({fromCurrency: this.secondSelectedCurrency, toCurrency: this.firstSelectedCurrency}))
            ).subscribe((result: CurrencyData) => {
                this.firstCurrencyAmount = Number((this.secondCurrencyAmount * result.value).toFixed(2));
            });
        }
    }

    private calculate() {
        // todo: refactor onchanges
    }
}
