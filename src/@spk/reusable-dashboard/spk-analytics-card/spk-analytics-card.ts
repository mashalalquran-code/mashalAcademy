import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SpkApexcharts } from '../../spk-apexcharts/apexcharts';

@Component({
  selector: 'spk-analytics-card',
  standalone: true,
  imports: [NgApexchartsModule,CommonModule,SpkApexcharts],
  templateUrl: './spk-analytics-card.html',
  styleUrl: './spk-analytics-card.scss'
})
export class SpkAnalyticsCard {
   icon = input<string>('');
   title = input<string>('');
   value = input<string>('');
   percentage = input<string>('');
   trend = input<'up' | 'down'>('up');
   description = input<string>('');
   bgClass = input<string>('');
   chartOptions = input<any>();

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}


