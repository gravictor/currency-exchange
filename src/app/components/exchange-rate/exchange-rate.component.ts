import {Component, HostBinding, Input, OnInit} from "@angular/core";
import {CurrencyPair} from "../../models/currency.model";
import {Store} from "@ngrx/store";
import {getLoadingState, getPairData} from "../../store/currency.selectors";
import {filter, Observable, switchMap} from "rxjs";

@Component({
    selector: 'ce-exchange-rate',
    templateUrl: 'exchange-rate.component.html',
    styleUrls: ['exchange-rate.component.scss']
})
export class CeExchangeRateComponent implements OnInit {
    @HostBinding('class.ce-exchange-rate')
    hostClass: boolean = true;

    @Input() currencyPair: CurrencyPair;

    loading$: Observable<boolean>;
    pairData$: Observable<any>;

    constructor(private store: Store) {}

    ngOnInit(): void {
        this.loading$ = this.store.select(getLoadingState);

        this.pairData$ = this.loading$.pipe(
            filter((isLoading: boolean) => !isLoading),
            switchMap(() => this.store.select(getPairData(this.currencyPair)))
        );
    }
}
