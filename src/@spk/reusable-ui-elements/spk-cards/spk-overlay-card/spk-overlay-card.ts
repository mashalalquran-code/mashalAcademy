import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-overlay-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-overlay-card.html',
  styleUrl: './spk-overlay-card.scss'
})
export class SpkOverlayCard {
    imgSrc = input<string>(''); // Image source
    boxClass = input<string>(''); // Image source
    additionalClass = input<string>(''); // Image source
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
    headerText = input<string>(); // Header text
    bodyText = input<string>(); // Main body text
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
    bodyAdditionalText = input<string>(); // Additional body text
    footerText = input<string>(); // Footer text
    scrollable = input<boolean>(false); // Is body scrollable
    hasFooter = input<boolean>(false); // Display footer
}


