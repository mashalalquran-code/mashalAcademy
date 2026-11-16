import { Component, input } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'spk-chartjs',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './spk-chartjs.html',
  styleUrl: './spk-chartjs.scss'
})
export class SpkChartjs {

  chartjs = input<ChartConfiguration>();
}


