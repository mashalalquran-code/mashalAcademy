import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-listgroup-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-listgroup-card.html',
  styleUrl: './spk-listgroup-card.scss'
})
export class SpkListgroupCard {
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
    header = input<string>(''); 
    items = input<string[]>([]);
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
    footer = input<string>(''); 
}


