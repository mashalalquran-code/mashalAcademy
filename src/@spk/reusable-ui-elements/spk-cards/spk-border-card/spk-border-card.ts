import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-border-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-border-card.html',
  styleUrl: './spk-border-card.scss'
})
export class SpkBorderCard {
   CustomCardClass = input<string>(''); // Dynamic card border class
   Title = input<string>(''); // Title text
   Navigate = input<string>('#'); // Link navigation
   Class = input<string>(''); // Dynamic class for the icon
   Badges = input<{
    text: string;
    className: string;
}[]>([]); // Array of badges
   Images = input<string[]>([]); // Array of image sources
}


