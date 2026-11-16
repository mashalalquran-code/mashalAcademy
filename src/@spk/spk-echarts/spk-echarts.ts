import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { NgxEchartsDirective } from 'ngx-echarts';

@Component({
  selector: 'spk-echarts',
  standalone: true,
  imports: [NgxEchartsDirective,NgClass],
  templateUrl: './spk-echarts.html',
  styleUrl: './spk-echarts.scss'
})
export class SpkEcharts {
  echartId = input<string>('');         // Dynamic table ID
  theme = input<string>('');
  options = input<any>()
  echartClass = input<string>()
  
}


