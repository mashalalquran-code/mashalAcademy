import { Component, input } from '@angular/core';

@Component({
  selector: 'spk-nft-dashboard-card',
  imports: [],
  templateUrl: './spk-nft-dashboard-card.html',
  styleUrl: './spk-nft-dashboard-card.scss'
})
export class SpkNftDashboardCard {
   imageUrl = input<string>('');
   title = input<string>('');
   creator = input<string>('');
   bid = input<number>(0);
   timeLeft = input<string>('');
}


