import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'spk-alerts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-alerts.html',
  styleUrl: './spk-alerts.scss'
})
export class SpkAlerts {
  alertClass = input<string>('');
  message = input<string>('');
  avatarClass = input<string>('');

  icon = input<SafeHtml>('');
  close = input<boolean>(true)
  image = input<string | null>(null);
  visible: boolean = true;

  dismiss(): void {
    this.visible = false;
  }
}


