import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {GetPairDataAction} from "./store/currency.actions";
import {CurrencyType} from "./models/currency.model";

@Component({
   selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private store: Store) {}
    currenciesToFetch: CurrencyType[] = [CurrencyType.UAH, CurrencyType.EUR, CurrencyType.USD];

    ngOnInit(): void {
        this.store.dispatch(new GetPairDataAction(this.currenciesToFetch));
    }
}
