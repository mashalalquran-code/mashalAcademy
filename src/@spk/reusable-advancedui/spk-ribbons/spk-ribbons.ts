import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-ribbons',
  imports: [],
  templateUrl: './spk-ribbons.html',
  styleUrl: './spk-ribbons.scss'
})
export class SpkRibbons {
  mainClass = input<string>('');
  bodyClass = input<string>('');
  ribbonClass = input<string>('');
  title = input<string>('');
  textAlignment = input<string>('');
  topTitle = input<string>('');
  bottomTitle = input<string>('');
  description = input<string>('');
  descriptionClass = input<string>('');
}


