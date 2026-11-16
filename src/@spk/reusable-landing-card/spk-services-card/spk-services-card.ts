
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-services-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-services-card.html',
  styleUrl: './spk-services-card.scss'
})
export class SpkServicesCard {
   bgColor = input<string>('');
   title = input<string>('');
   description = input<string>('');
  constructor(private sanitizer: DomSanitizer) {}
   svg = input.required<SafeHtml>();
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}


