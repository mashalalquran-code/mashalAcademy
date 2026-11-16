import { Component, input } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { SpkApexcharts } from '../../spk-apexcharts/apexcharts';
import { CountUpModule } from 'ngx-countup';
@Component({
  selector: 'app-spk-transaction-card',
  imports: [SpkApexcharts,CountUpModule],
  templateUrl: './spk-transaction-card.html',
  styleUrl: './spk-transaction-card.scss'
})
export class SpkTransactionCard {
  transactionData = input<any>();
  constructor(private sanitizer: DomSanitizer) {}
  sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}


