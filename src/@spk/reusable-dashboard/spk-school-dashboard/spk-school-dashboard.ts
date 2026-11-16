import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-school-dashboard',
  imports: [CommonModule],
  templateUrl: './spk-school-dashboard.html',
  styleUrl: './spk-school-dashboard.scss'
})
export class SpkSchoolDashboard {
   iconBgClass = input<string>('');
   iconSvg = input<string>('');
   title = input<string>('');
   value = input<string | number>('');
   subtitle = input<string>('This Year');
   change = input<string>('');
   isUp = input<boolean>(true); // true: green arrow up, false: red arrow down
  constructor(private sanitizer: DomSanitizer) {}

  sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}


