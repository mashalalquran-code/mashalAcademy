import { Component, input } from '@angular/core';
import { SpkApexcharts } from '../../spk-apexcharts/apexcharts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'spk-crypto-dashboard',
  imports: [SpkApexcharts,CommonModule],
  templateUrl: './spk-crypto-dashboard.html',
  styleUrl: './spk-crypto-dashboard.scss'
})
export class SpkCryptoDashboard {
   cryptoName = input<string>('');
   cryptoSymbol = input<string>('');
   cryptoLogo = input<string>('');
   cryptoAmount = input<string>('');
   cryptoChange = input<string>('');
   cryptoChangeClass = input<string>('');
   cryptoIconClass = input<string>('');
   chartOptions = input<any>();
}


