import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { SpkDropdowns } from '../../reusable-ui-elements/spk-dropdowns/spk-dropdowns';

@Component({
  selector: 'spk-order-card',
  imports: [CommonModule,SpkDropdowns],
  templateUrl: './spk-order-card.html',
  styleUrl: './spk-order-card.scss'
})
export class SpkOrderCard {
   productId = input<string>('');
   productImage = input<string>('');
   productName = input<string>('');
   productDate = input<string>('');
   productStatus = input<string>('');
   productPrice = input<string>('');
   sellerName = input<string>('');
   sellerImage = input<string>('');
}


