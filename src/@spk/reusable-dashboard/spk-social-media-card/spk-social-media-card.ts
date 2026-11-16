import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-social-media-card',
  imports: [CommonModule],
  templateUrl: './spk-social-media-card.html',
  styleUrl: './spk-social-media-card.scss'
})
export class SpkSocialMediaCard {
   platformName = input.required<string>();
   followers = input.required<string>();
   change = input.required<string>();
   iconSVG = input.required<string>();
   bgColorClass = input.required<string>();
   isGrowthUp = input<boolean>(true);
   label = input<string>('Followers'); // You can override this for YouTube (Subscribers)
  
  constructor(private sanitizer: DomSanitizer) {}
  sanitizeHtml(iconSVG: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(iconSVG);
  }
}


