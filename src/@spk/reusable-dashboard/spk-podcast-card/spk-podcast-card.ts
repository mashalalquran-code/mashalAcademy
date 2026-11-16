import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { SpkDropdowns } from '../../reusable-ui-elements/spk-dropdowns/spk-dropdowns';

@Component({
  selector: 'spk-podcast-card',
  imports: [CommonModule,SpkDropdowns],
  templateUrl: './spk-podcast-card.html',
  styleUrl: './spk-podcast-card.scss'
})
export class SpkPodcastCard {
   image = input.required<string>();
   title = input.required<string>();
   author = input.required<string>();
   duration = input.required<string>();
   listeners = input.required<number>();
}


