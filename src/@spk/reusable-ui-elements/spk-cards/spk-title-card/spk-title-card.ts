import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'spk-title-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './spk-title-card.html',
  styleUrl: './spk-title-card.scss'
})
export class SpkTitleCard {
    CustomClass = input<string>(''); // Custom class for the box
    Imagetag = input<boolean>(false); // Show or hide image
    Imgsrc = input<string>(''); // Image source
    Anchortagbefore = input<boolean>(false); // Show anchor tag before header
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
    AnchortagNavigate = input<string>(''); // Anchor navigation
    Cardheader = input<boolean>(false); // Show or hide card header
    CustomHeaderClass = input<string>(''); // Custom header class
    Title = input<string>(''); // Card title
    Linktag = input<boolean>(false); // Show or hide link
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
    Navigate = input<string>(''); // Navigation URL for the link
    LinkClass = input<string>(''); // Custom class for the link
    Icontag = input<boolean>(false); // Show or hide icon in link
    Icon = input<string>(''); // Icon class
    Cardfooter = input<boolean>(false); // Show or hide footer
    CustomFooterClass = input<string>(''); // Custom footer class
    ButtonTag = input<boolean>(false); // Show or hide button
    TwoButtonTag = input<boolean>(false); // Show or hide button
    Footertext = input<string>(''); // Footer text
    CustomBodyClass = input<string>(''); // Custom body class
    OnclickFunc = output<void>(); // Click event for link

  handleClick() {
    // TODO: The 'emit' function requires a mandatory void argument
    this.OnclickFunc.emit(); // Emit click event
  }
}


