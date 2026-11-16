
import { Component,  input } from '@angular/core';
import { SpkApexcharts } from "../../spk-apexcharts/apexcharts";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-crypto-marketcap-card',
  standalone: true,
  imports: [SpkApexcharts],
  templateUrl: './spk-crypto-marketcap-card.html',
  styleUrl: './spk-crypto-marketcap-card.scss'
})
export class SpkCryptoMarketcapCard {
  crypto= input<any>();

  constructor(private sanitizer: DomSanitizer) {}
  sanitizeIcon(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}


