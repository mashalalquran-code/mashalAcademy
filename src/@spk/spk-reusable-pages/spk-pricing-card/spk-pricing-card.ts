import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'spk-pricing-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-pricing-card.html',
  styleUrl: './spk-pricing-card.scss'
})
export class SpkPricingCard {
  title = input<string>('');
  description = input<string>('');
  price = input<string>('');
  perMonth = input<string>('');
  additionalCost = input<string>('');
  planType = input<string>('');
  badge = input<string>('');
  buttonText = input<string>('');
  bgColor = input<string>('');
  buttonClass = input<string>('');

  iconPaths = input<Array<{ d: string; opacity?: string }>>([]);
  features = input<Array<{ name: string; badge?: string; badgeClass?: string; trialPeriod?: string }>>([]);
}


