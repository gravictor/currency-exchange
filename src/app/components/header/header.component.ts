import {Component, HostBinding} from "@angular/core";
import {CurrencyPair, CurrencyType} from "../../models/currency.model";

@Component({
    selector: 'ce-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class CeHeaderComponent  {
  @HostBinding('class.ce-header')
  hostClass: boolean = true;

  exchangeRatePair: CurrencyPair[] = [
      {fromCurrency: CurrencyType.USD, toCurrency: CurrencyType.UAH},
      {fromCurrency: CurrencyType.EUR, toCurrency: CurrencyType.UAH},
  ];
}
