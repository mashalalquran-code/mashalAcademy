import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'spk-medical-card',
  standalone: true,
  imports: [NgApexchartsModule,CommonModule],
  templateUrl: './spk-medical-card.html',
  styleUrl: './spk-medical-card.scss'
})
export class SpkMedicalCard {
   count = input.required<string | number>();
   label = input.required<string>();
   percentage = input.required<string>();
   iconClass = input.required<string>();
   svg = input.required<string>();
   badgeColor = input.required<string>();
   chartOptions = input<any>();
  constructor(private sanitizer: DomSanitizer) {}

  sanitizeIcon(icon: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon);
  }
}


