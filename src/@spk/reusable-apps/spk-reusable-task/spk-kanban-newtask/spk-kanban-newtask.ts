
import { Component, input } from '@angular/core';
import { SpkDropdowns } from '../../../reusable-ui-elements/spk-dropdowns/spk-dropdowns';
interface Card {
   id: string;
   badges: string[];
   title: string;
   description: string | null;
   subTasks: {
      completed: number;
      total: number;
   };
   progress: number;
   likes: number;
   comments: number;
   assignees: string[];
   image: string | null;
}
@Component({
   selector: 'spk-kanban-newtask',
   imports: [SpkDropdowns],
   templateUrl: './spk-kanban-newtask.html',
   styleUrl: './spk-kanban-newtask.scss'
})
export class SpkKanbanNewtask {
   data=input<Card>()


}


