import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {GetPairDataAction} from "./store/currency.actions";
import {CurrencyType} from "./models/currency.model";

@Component({
   selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'currency-exchange';
    constructor(private store: Store<{ currency: any }>) {}

    ngOnInit(): void {
        this.store.dispatch(new GetPairDataAction(CurrencyType.UAH));
        this.store.dispatch(new GetPairDataAction(CurrencyType.EUR));
        this.store.dispatch(new GetPairDataAction(CurrencyType.USD));
    }
}
