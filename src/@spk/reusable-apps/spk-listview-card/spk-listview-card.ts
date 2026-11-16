import { Component, input } from '@angular/core';

import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { SpkApexcharts } from '../../spk-apexcharts/apexcharts';
import { CountUpModule } from 'ngx-countup';

@Component({
  selector: 'spk-listview-card',
  standalone: true,
  imports: [SpkApexcharts,CountUpModule],
  templateUrl: './spk-listview-card.html',
  styleUrl: './spk-listview-card.scss'
})
export class SpkListviewCard {
   card = input.required<{
    id: number;
    avatarClass: string;
    svg: string;
    tasksType: string;
    count: number;
    valueClass: string;
    value: string;
    percentageClass: string;
    percentageIconClass: string;
    percentage: string;
    chartOptions: any;
}>();

 constructor(private sanitizer: DomSanitizer) {}
 sanitizeIcon(html: string): SafeHtml {
   return this.sanitizer.bypassSecurityTrustHtml(html);
 }
}


