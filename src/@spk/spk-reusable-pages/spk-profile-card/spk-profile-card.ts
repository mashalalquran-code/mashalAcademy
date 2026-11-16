import { Component, input } from '@angular/core';
import { SpkDropdowns } from "../../reusable-ui-elements/spk-dropdowns/spk-dropdowns";

@Component({
  selector: 'spk-profile-card',
  imports: [SpkDropdowns],
  templateUrl: './spk-profile-card.html',
  styleUrl: './spk-profile-card.scss'
})
export class SpkProfileCard {
   name = input<string>('');
   email = input<string>('');
   role = input<string>('');
   avatar = input<string>('');
   badgeClass = input<string>('');
}


