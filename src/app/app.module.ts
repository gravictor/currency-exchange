import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CeHeaderComponent} from "./components/header/header.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {CurrencyEffects} from "./store/currency.effects";
import {HttpClientModule} from "@angular/common/http";
import {
    CURRENCY_REDUCER_TOKEN,
    CurrencyReducerService,
    currencyStateKey,
    getCurrencyReducers
} from "./store/currency.reducer";

@NgModule({
  declarations: [
    AppComponent,
    CeHeaderComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        EffectsModule.forRoot([CurrencyEffects]),
        StoreModule.forRoot({}), // Важно: StoreModule.forRoot должен быть здесь
        StoreModule.forFeature(currencyStateKey, CURRENCY_REDUCER_TOKEN)
    ],
    providers: [
        CurrencyReducerService,
        {
            provide: CURRENCY_REDUCER_TOKEN,
            useFactory: getCurrencyReducers,
            deps: [CurrencyReducerService]
        }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
