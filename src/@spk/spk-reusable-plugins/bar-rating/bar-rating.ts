
import { Component, input, output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';

@Component({
  selector: 'spk-bar-rating',
  standalone: true,
  imports: [BarRatingModule, FormsModule, ReactiveFormsModule],
  templateUrl: './bar-rating.html',
  styleUrl: './bar-rating.scss'
})
export class BarRating {
  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
   rating = input<any>();
   starRate1 = input<any>();
   theme = input<any>();
   title = input<string>('');
   message = input<string>('');
   readonly = input<boolean>(false);
   control = input<FormControl>(new FormControl());
   max = input<number>(5);
   isBusyText = input<string>('');
  
  
  hovered: number = 1;
  selected: any = null;

  onRateChange(rate: number): void {
    this.selected = rate;
    // this.ratingChange.emit(rate);
  }

  resetRating(): void {
    this.control().setValue(null);
  }

   rateChange = output<number>(); // Emit selected rating
   hoveredChange = output<number>(); // Emit hovered rating


  onHover(value: number): void {
    this.hovered = value;
    this.hoveredChange.emit(value);
  }

  onLeave(): void {
    this.hovered = 0;
    this.hoveredChange.emit(0);
  }
}

