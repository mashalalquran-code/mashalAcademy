
import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-deals-card',
  standalone: true,
  imports: [],
  templateUrl: './spk-deals-card.html',
  styleUrl: './spk-deals-card.scss'
})
export class SpkDealsCard {
   avatarUrl = input<string>('');
   name = input<string>('');
   amountType = input<string>('');
   timestamp = input<string>('');
   companyName = input<string>('');
   amount = input<string>('');
   additionalCompanyName = input<string>('');
}


