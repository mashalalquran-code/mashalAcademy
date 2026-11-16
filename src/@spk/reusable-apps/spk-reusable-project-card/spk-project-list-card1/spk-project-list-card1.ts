import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-project-list-card1',
  imports: [CommonModule],
  templateUrl: './spk-project-list-card1.html',
  styleUrl: './spk-project-list-card1.scss'
})
export class SpkProjectListCard1 {
   category = input<string>();
   categoryBg = input<string>();
   title = input<string>();
   description = input<string>();
   icon = input<string>();
   iconBg = input<string>();
   skill = input<string>();
   completedTasks = input<string>();
   team = input<string[]>([]);
   maxVisible = input<number>(2); // Number of visible avatars
   dueDate = input<string>();

  get visibleTeam() {
    return this.team().slice(0, this.maxVisible());
  }
  
  get extraCount(): number {
    return this.team().length > this.maxVisible() ? this.team().length - this.maxVisible() : 0;
  }
}


