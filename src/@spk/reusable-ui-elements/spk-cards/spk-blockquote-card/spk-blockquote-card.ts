import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-blockquote-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-blockquote-card.html',
  styleUrl: './spk-blockquote-card.scss'
})
export class SpkBlockquoteCard {
   quote = input<string>('');  // The quote text
   author = input<string>('');  // Author's name
   source = input<string>('');  // Citation source
   footerText = input<string>('');  // Optional footer text
   backgroundClass = input<string>('');  // Optional custom background class
   isDarkTheme = input<boolean>(false);  // Optional flag for dark theme
}


