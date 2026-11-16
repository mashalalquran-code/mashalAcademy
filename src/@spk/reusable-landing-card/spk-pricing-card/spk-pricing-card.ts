
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-pricing-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-pricing-card.html',
  styleUrl: './spk-pricing-card.scss'
})
export class SpkPricingCard {
 plan = input<any>();


 constructor( private sanitizer: DomSanitizer) {

 }

  getSanitizedSVG(svgContent: string): SafeHtml {
     return this.sanitizer.bypassSecurityTrustHtml(svgContent);
 }

}


