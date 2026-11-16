import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-horizontal-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-horizontal-card.html',
  styleUrl: './spk-horizontal-card.scss'
})
export class SpkHorizontalCard {
    imgSrc = input<string>(''); // Image source
    imgPosition = input<'left' | 'right'>('left'); // Image position
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
    headerTitle = input<string>(); // Header title
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
    bodyTitle = input<string>(); // Body title
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
    bodyText = input<string>(); // Body text
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
    footerText = input<string>(); // Footer text
    imageClass = input<string>(); // Footer text

}


