
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-accordions',
  imports: [FormsModule],
  templateUrl: './spk-accordions.html',
  styleUrl: './spk-accordions.scss'
})
export class SpkAccordions {
  accordions = input<any>();
  groupClass = input<any>();
  alwaysOpen = input<any>();
  toggleAccordion(accordion: any): void {
    accordion.active = !accordion.active;
  }
  constructor(private sanitizer: DomSanitizer) { }

}


