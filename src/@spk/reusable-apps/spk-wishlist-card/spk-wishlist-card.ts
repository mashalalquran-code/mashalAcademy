import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-wishlist-card',
  imports: [CommonModule,RouterModule],
  templateUrl: './spk-wishlist-card.html',
  styleUrl: './spk-wishlist-card.scss'
})
export class SpkWishlistCard {
   image = input<string>('');
   title = input<string>('');
   price = input<string>('');
   oldPrice = input<string>('');
   inStock = input<boolean>(true);
   rating = input<number>(4); // out of 5
}


