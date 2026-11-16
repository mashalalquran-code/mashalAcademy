
import { Component, Input, input } from '@angular/core';
import { SpkApexcharts } from '../../spk-apexcharts/apexcharts';

@Component({
  selector: 'spk-currency-exchange',
  imports: [SpkApexcharts],
  templateUrl: './spk-currency-exchange.html',
  styleUrl: './spk-currency-exchange.scss'
})
export class SpkCurrencyExchange {
  crypto = input<any>();
}


