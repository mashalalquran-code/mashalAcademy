import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { SpkDropdowns } from '../../../reusable-ui-elements/spk-dropdowns/spk-dropdowns';

@Component({
  selector: 'spk-kanban-card',
  imports: [CommonModule,SpkDropdowns],
  templateUrl: './spk-kanban-card.html',
  styleUrl: './spk-kanban-card.scss'
})
export class SpkKanbanCard {
   iconClass = input<string>('ri-briefcase-line');
   bgColor = input<string>('bg-primary');
   title = input<string>('');
   value = input<number>(0);
   percentage = input<string>('');
   percentType = input<'up' | 'down'>('up');
}


