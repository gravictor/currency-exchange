import {Component, HostBinding, OnInit} from "@angular/core";

@Component({
    selector: 'ce-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class CeHeaderComponent implements OnInit {
  @HostBinding('class.ce-header')
  hostClass: boolean = true;

  ngOnInit(): void {
  }

}
