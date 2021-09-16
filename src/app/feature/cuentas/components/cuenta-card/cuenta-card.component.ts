import { Component, Input, OnInit } from '@angular/core';
import { Cuenta } from '@shared/modelo/cuenta';

@Component({
  selector: 'app-cuenta-card',
  templateUrl: './cuenta-card.component.html',
  styleUrls: ['./cuenta-card.component.scss']
})
export class CuentaCardComponent implements OnInit {

  @Input() cuenta: Cuenta;

  constructor() { }

  ngOnInit(): void {
  }

}
