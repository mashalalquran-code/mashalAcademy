import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-nft-card',
  imports: [],
  templateUrl: './spk-nft-card.html',
  styleUrl: './spk-nft-card.scss'
})
export class SpkAppsNftCard {
  nft = input<any>();
}


