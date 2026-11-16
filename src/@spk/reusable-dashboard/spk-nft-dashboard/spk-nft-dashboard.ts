
import { Component, input } from '@angular/core';
import { SvgReplaceDirective } from '../../../app/shared/directives/svgReplace.directive';
interface card {
  title:string;
  value:string;
  percentage:string;
  status:string;
  statusClass:string;
  bgClass:string;
  svg:string;
}
@Component({
  selector: 'spk-nft-dashboard',
  imports: [SvgReplaceDirective],
  templateUrl: './spk-nft-dashboard.html',
  styleUrl: './spk-nft-dashboard.scss'
})
export class SpkNftDashboard {
  data = input<card>();

}


