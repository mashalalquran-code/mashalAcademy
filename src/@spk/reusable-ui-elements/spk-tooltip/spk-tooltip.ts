
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-tooltip',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './spk-tooltip.html',
  styleUrl: './spk-tooltip.scss'
})
export class SpkTooltip {
    customClass = input<string>('');
    Popover = input<string>('');
}


