import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { SpkApexcharts } from '../../spk-apexcharts/apexcharts';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-hrm-card',
  imports: [CommonModule,SpkApexcharts],
  templateUrl: './spk-hrm-card.html',
  styleUrl: './spk-hrm-card.scss'
})
export class SpkHrmCard {
   iconBgColor = input('bg-primary');
   iconSvg = input('');
   title = input('');
   count = input('');
   change = input('');
   changeType = input<'up' | 'down'>('up');
   changeColor = input('text-success');
   subtitle = input('');
   chartId = input('');
   chartValue = input('');
   chartTextColor = input('');
   chartOptions = input<any>();
    constructor(private sanitizer: DomSanitizer) {}
  
    sanitizeIcon(iconSvg: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
    }
}


