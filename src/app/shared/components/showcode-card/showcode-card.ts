
import { NgClass } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, effect, ElementRef, input, signal, ViewChild } from '@angular/core';
interface Prism {
  [key: string]: string | undefined; // Allows any string key with string or undefined value
}
interface ShowCode {
  key?: string, value?: string
}
@Component({
  selector: 'app-showcode-card',
  templateUrl: './showcode-card.html',
  styleUrl: './showcode-card.scss',
  standalone: true,
  imports: [NgClass]
})
export class ShowcodeCard {

  title = input<string>();
  subtitle = input<string>();
  classbody = input<string>();
  classCard = input<string>();
  classHeader = input<string>();
  prism = input<Prism>({});
  toggleStatus = false;
  showCodeArray: ShowCode[] = [{ key: '', value: "" }];
  toggleShowCode() {
    this.toggleStatus = !this.toggleStatus;
  }
  constructor() {
    effect(() => {
      // Used to convert the prism show code from Object to Array.
      this.showCodeArray = Object.entries(this.prism() ?? {}).map(([key, value]) => { return { key, value } });
    }
    )
  }

  activeTab = 0;
  
}


