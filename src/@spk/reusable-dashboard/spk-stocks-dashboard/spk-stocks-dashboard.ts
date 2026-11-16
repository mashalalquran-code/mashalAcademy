import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { SpkApexcharts } from '../../spk-apexcharts/apexcharts';

@Component({
  selector: 'spk-stocks-dashboard',
  imports: [CommonModule,SpkApexcharts],
  templateUrl: './spk-stocks-dashboard.html',
  styleUrl: './spk-stocks-dashboard.scss'
})
export class SpkStocksDashboard {
   name = input<string>('');
   company = input<string>('');
   iconClass = input<string>(''); // e.g., 'bi bi-apple'
   bgColor = input<string>(''); // e.g., 'bg-primary-transparent'
   change = input<string>(''); // e.g., '+0.28%' or '-0.93%'
   changeType = input<'up' | 'down'>('up'); // for text color
   value = input<string>(''); // e.g., '$170.77'
   chartId = input<string>(''); // for chart div ID
   chartOptions = input<any>();

}


