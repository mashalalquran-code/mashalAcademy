
import { NgClass } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'spk-collapse-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './spk-collapse-card.html',
  styleUrl: './spk-collapse-card.scss'
})
export class SpkCollapseCard {
  title = input<string>('Card Title');
  subtitle = input<string | undefined>('');
  content = input<string | undefined>('Default card content');
  isCollapsible = input<boolean>(false);
  isClosable = input<boolean>(false);
  isFullscreenable = input<boolean>(false);

  isCollapsed: boolean = false;
  isClosed: boolean = false;
  isFullscreen: boolean = false;

  collapseId!: string; // Unique ID for each card
  collapseTarget!: string;

  ngOnInit() {
    this.collapseId = `collapse-${Math.random().toString(36).slice(2, 9)}`;
    this.collapseTarget = `#${this.collapseId}`;
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeCard() {
    this.isClosed = true;
  }

  toggleFullscreen() {
    this.isFullscreen = !this.isFullscreen;
  }
}


