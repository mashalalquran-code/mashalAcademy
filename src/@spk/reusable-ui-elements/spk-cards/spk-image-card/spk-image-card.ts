
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-image-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-image-card.html',
  styleUrl: './spk-image-card.scss'
})
export class SpkImageCard {
    // TODO: Skipped for migration because:
    //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
    //  and migrating would break narrowing currently.
      imgSrc = input<string>(); // Image source
    imgPosition = input<'top' | 'bottom'>(); // Image position
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
    title = input<string>(); // Card title
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
    bodyText = input<string>(); // Card body text
    FoolterClass = input<string>(); // Card body text
    FooterPosition = input<'top' | 'bottom' | 'middle'>(); // Image position
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
    footerText = input<string>(); // Footer text
    hasHeader = input<boolean>(false); // Show or hide header
    headerText = input<string>(); // Header text
}


