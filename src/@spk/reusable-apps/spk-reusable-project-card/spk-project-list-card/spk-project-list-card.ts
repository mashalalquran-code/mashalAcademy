import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { SpkDropdowns } from '../../../reusable-ui-elements/spk-dropdowns/spk-dropdowns';

@Component({
  selector: 'spk-project-list-card',
  imports: [CommonModule,SpkDropdowns],
  templateUrl: './spk-project-list-card.html',
  styleUrl: './spk-project-list-card.scss'
})
export class SpkProjectListCard {
   title = input<string>();
   count = input<number | string>();
   icon = input<string>();
   bgColor = input<string>();
   customClass = input<string>('');
   dropdownOptions = input<string[]>(['Week', 'Day', 'Year']);
}


