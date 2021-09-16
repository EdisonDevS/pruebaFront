import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {


  constructor(
    private location: Location
    ) { }

  volver() {
    this.location.back();
  }

}
