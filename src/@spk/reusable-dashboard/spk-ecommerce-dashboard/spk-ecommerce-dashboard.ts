import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-ecommerce-dashboard',
  imports: [CommonModule],
  templateUrl: './spk-ecommerce-dashboard.html',
  styleUrl: './spk-ecommerce-dashboard.scss'
})
export class SpkEcommerceDashboard {
   title = input<string>('');
   value = input<string>('');
   percentage = input<string>('');
   trend = input<string>(''); // 'up' or 'down'
   icon = input<string>(''); // Icon class for the avatar (e.g., 'fe fe-globe')
   color = input<string>(''); // Background color for avatar (e.g., 'bg-primary/10')
  constructor(private sanitizer: DomSanitizer) {}

  sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}


