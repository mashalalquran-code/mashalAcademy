import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-spk-widget-overall-data-card',
  imports: [CommonModule],
  templateUrl: './spk-widget-overall-data-card.html',
  styleUrl: './spk-widget-overall-data-card.scss'
})
export class SpkWidgetOverallDataCard {

   avatarClass = input<string>();
  //  svgPath = input<string>();
   title = input<string>();
   value = input<string>();
   percentage = input<string>();
   percentageIcon = input<string>();
   percentageClass = input<string>();
   svg = input<SafeHtml>();
  constructor(private sanitizer: DomSanitizer) {}

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}


