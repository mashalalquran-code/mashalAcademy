import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-bgcolor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-bgcolor-card.html',
  styleUrl: './spk-bgcolor-card.scss'
})
export class SpkBgcolorCard {
   cardClass = input<string>(''); // Box background class
   avatar = input<string>(''); // Avatar image source
   name = input<string>(''); // User's name
   status = input<string>(''); // User's status or description
   statusClass = input<string>('text-white'); // Optional status text class
   nameClass = input<string>(''); // Optional status text class
   anchorClass = input<string>('text-white'); // Optional class for the anchor

}


