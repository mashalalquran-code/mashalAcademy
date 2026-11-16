
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-glance-cards',
  standalone: true,
  imports: [],
  templateUrl: './spk-glance-cards.html',
})
export class SpkGlanceCards {
   title = input.required<string>();
   description = input.required<string>();
   icon = input.required<string>(); // URL or SVG path
   outerColor = input.required<string>();
   innerColor = input.required<string>();
}




