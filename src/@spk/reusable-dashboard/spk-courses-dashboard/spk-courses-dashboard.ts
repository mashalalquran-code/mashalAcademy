import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-courses-dashboard',
  imports: [CommonModule],
  templateUrl: './spk-courses-dashboard.html',
  styleUrl: './spk-courses-dashboard.scss'
})
export class SpkCoursesDashboard {
   title = input<string>('');
   value = input<string>('');
   percentage = input<string>('');
   percentageType = input<'up' | 'down'>('up'); // For icon direction and color
   icon = input<string>(''); // SVG string
   bgColor = input<string>('bg-primary');
   percentageColor = input<string>('text-success');
  constructor(private sanitizer: DomSanitizer) {}
  
  sanitizeIcon(iconSvg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
  }
}


