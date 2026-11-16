import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-sales-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-sales-cards.html',
  styleUrl: './spk-sales-cards.scss'
})
export class SpkSalesCards {
   title = input<string>('');
   value = input<string>('');
   percentage = input<string>('');
   linkText = input<string>('');
   svg = input<string>('');
   linkHref = input<string>('');
   svgClass = input<string>('bg-primary'); // Default to 'bg-primary'
   textColor = input<string>('text-white'); // Default to 'text-white'
   changeColor = input<string>('text-success'); // Default to 'text-success'

 constructor(private sanitizer: DomSanitizer) {}

 sanitizeIcon(svg: string): SafeHtml {
   return this.sanitizer.bypassSecurityTrustHtml(svg);
 }
}


