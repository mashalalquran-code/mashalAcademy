
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-team-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-team-card.html',
  styleUrl: './spk-team-card.scss'
})
export class SpkTeamCard {
   name = input.required<string>();
   role = input.required<string>();
   image = input.required<string>();
   avatarClass = input.required<string>();
   tags = input.required<string[]>();
}


