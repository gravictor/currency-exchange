import {Component, HostBinding, OnInit} from "@angular/core";
import {Store} from "@ngrx/store";
import {GetPairDataAction} from "../../store/currency.actions";
import {getPairData} from "../../store/currency.selectors";
import {CurrencyType} from "../../models/currency.model";

@Component({
    selector: 'ce-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class CeHeaderComponent  {
  @HostBinding('class.ce-header')
  hostClass: boolean = true;

}
