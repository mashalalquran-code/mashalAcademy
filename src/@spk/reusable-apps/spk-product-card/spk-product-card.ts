
import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-product-card',
  standalone: true,
  imports: [RouterModule,NgClass],
  templateUrl: './spk-product-card.html',
  styleUrl: './spk-product-card.scss'
})
export class SpkProductCard {
  productId = input<string>('');
  productImage = input<string>('');
  productName = input<string>('');
  productDate = input<string>('');
  productStatus = input<string>('');
  productPrice = input<string>('');
  sellerName = input<string>('');
  sellerImage = input<string>('');
   ratings= input<string>('');

  discount = input<string>('');
  discountBgcolor = input<string>('');
  orginalPrice=input<string>('');
  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  
  productIdNumber = input<number>(0);

  bgColor = input<string>('');

  
}


