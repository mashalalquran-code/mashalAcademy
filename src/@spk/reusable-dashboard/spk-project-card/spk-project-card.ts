import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-project-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-project-card.html',
  styleUrl: './spk-project-card.scss'
})
export class SpkProjectCard {
   title = input<string>('');
   value = input<string>('');
   percentage = input<string>('');
   isPositive = input<boolean>(true);
   icon = input<string>('');
   color = input<string>('primary'); // Tailwind/Custom class like primary, success, etc.
  
  constructor(private sanitizer: DomSanitizer) {}

  sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}


