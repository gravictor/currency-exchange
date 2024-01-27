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
import {CeExchangeRateComponent} from "./components/exchange-rate/exchange-rate.component";
import {CeCurrencyConverterComponent} from "./components/currency-converter/currency-converter.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
      AppComponent,
      CeHeaderComponent,
      CeExchangeRateComponent,
      CeCurrencyConverterComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        EffectsModule.forRoot([CurrencyEffects]),
        StoreModule.forRoot({}),
        StoreModule.forFeature(currencyStateKey, CURRENCY_REDUCER_TOKEN),
        MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule,MatSelectModule,
        BrowserAnimationsModule,
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
