import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { SpkDropdowns } from '../../reusable-ui-elements/spk-dropdowns/spk-dropdowns';

@Component({
  selector: 'spk-product-list',
  imports: [CommonModule,SpkDropdowns],
  templateUrl: './spk-product-list.html',
  styleUrl: './spk-product-list.scss'
})
export class SpkProductList {
   title = input<string>();
   count = input<number | string>();
   percentage = input<string>();
   icon = input<string>();
   iconBg = input<string>();
   trend = input<'up' | 'down'>();
   dropdownOptions = input<string[]>(['Week', 'Day', 'Year']);
}


