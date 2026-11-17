import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  FlatpickrDirective,
  provideFlatpickrDefaults,
} from 'angularx-flatpickr';

import { SpkSalesCards } from '../../../../@spk/reusable-dashboard/spk-sales-cards/spk-sales-cards';
import { SpkApexcharts } from '../../../../@spk/spk-apexcharts/apexcharts';
import { SpkDropdowns } from '../../../../@spk/reusable-ui-elements/spk-dropdowns/spk-dropdowns';
import { SpkReusableTables } from '../../../../@spk/spk-reusable-tables/spk-reusable-tables';

import * as sales from '../../../shared/data/dashbaords/sales';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FlatpickrDirective,
    SpkSalesCards,
    SpkApexcharts,
    SpkDropdowns,
    SpkReusableTables,
    TranslatePipe,
  ],
  providers: [
    provideFlatpickrDefaults(),
  ],
  templateUrl: './finance.html',
  styleUrl: './finance.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Finance {
  readonly salesData = sales;

  rangeValue: { from: Date; to: Date } = {
    from: new Date(),
    to: this.addDays(new Date(), 10),
  };

  private addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}