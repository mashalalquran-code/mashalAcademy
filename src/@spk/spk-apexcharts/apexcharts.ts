
import { NgClass } from '@angular/common';
import { Component,  input } from '@angular/core';
import { ApexOptions, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'spk-apexcharts',
  standalone: true,
  imports: [NgApexchartsModule,NgClass],
  templateUrl: './apexcharts.html',
  styleUrl: './apexcharts.scss'
})
export class SpkApexcharts {
  chartOptions = input<any>();
  apxClass = input<string>();
  id = input<string>();
}


