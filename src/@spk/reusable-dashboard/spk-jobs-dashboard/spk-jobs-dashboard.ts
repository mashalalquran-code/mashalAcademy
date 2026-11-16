import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-jobs-dashboard',
  imports: [CommonModule],
  templateUrl: './spk-jobs-dashboard.html',
  styleUrl: './spk-jobs-dashboard.scss'
})
export class SpkJobsDashboard {
   title = input<string>('');
   value = input<string>('');
   changeText = input<string>('');
   changeValue = input<string>('');
   isPositive = input<boolean>(true);
   avatarClass = input<string>('bg-primary-transparent');
   icon = input<string>('');
    constructor(private sanitizer: DomSanitizer) {}
  
    sanitizeIcon(icon: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(icon);
    }
}


