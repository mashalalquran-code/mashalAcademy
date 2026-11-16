import { Component, input, Input } from '@angular/core';
import { SpkDropdowns } from '../reusable-ui-elements/spk-dropdowns/spk-dropdowns';

@Component({
  selector: 'spk-kanban-card',
  standalone: true,
  imports: [SpkDropdowns],
  templateUrl: './kanban-card.html',
  styleUrl: './kanban-card.scss'
})
export class KanbanCard {
  title = input<string>('');
  value = input<string>('');
  iconClass = input<string>('');
  textcolor = input<string>('');
  Bgcolor = input<string>(''); // Note: consider renaming to `bgColor` for consistency
  percentageChange = input<string>('');
  direction = input<string>(''); 
}


