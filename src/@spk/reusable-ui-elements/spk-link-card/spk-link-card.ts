import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-link-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-link-card.html',
  styleUrl: './spk-link-card.scss'
})
export class SpkLinkCard {
    avatarSrc = input<string>(''); // Avatar image source
    avatarSize = input<string>(''); // Avatar size
    name = input<string>(''); // User's name
    title = input<string>(''); // User's title
    titleClass = input<string>(''); // User's title
    description = input<string>(''); // Additional description
    customClass = input<string>(''); // Custom class for card styling
    textColorClass = input<string>(''); // Custom text color class for the name
    anchorLabel = input<string>('anchor'); // ARIA label for the anchor
}


