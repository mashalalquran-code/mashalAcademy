import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-utilities-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-utilities-card.html',
  styleUrl: './spk-utilities-card.scss'
})
export class SpkUtilitiesCard {
    widthClass = input<string>('');  // Default width is 75%
    title = input<string>('');
    bodyText = input<string>('');
    buttonText = input<string>('Button');
}


