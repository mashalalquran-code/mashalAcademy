import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'spk-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-team-card.html',
  styleUrl: './spk-team-card.scss'
})
export class SpkTeamCard {
  icon = input<string>();
  iconBackground = input<string>();
  label = input<string>();
  value = input<string>();

  isTeamView = input<boolean>(false); // default value
  teamData = input<Array<{ image: string; name: string; role: string }>>([]);
}


