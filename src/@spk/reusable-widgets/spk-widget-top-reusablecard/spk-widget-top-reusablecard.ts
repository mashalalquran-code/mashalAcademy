import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkApexcharts } from '../../spk-apexcharts/apexcharts';

@Component({
  selector: 'app-spk-widget-top-reusablecard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-widget-top-reusablecard.html',
  styleUrl: './spk-widget-top-reusablecard.scss'
})
export class SpkWidgetTopReusablecard {
   avatarClass = input<string>();
   avatarSubClass = input<any>();
   icon = input<any>();
   svgPath = input<string>();
   title = input<string>();
   value = input<string>();
   percentage = input<string>();
   percentageIcon = input<string>();
   percentageClass = input<string>();
  constructor(private sanitizer: DomSanitizer) {}
   svg = input<SafeHtml>();
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}


