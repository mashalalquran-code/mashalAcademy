
import { Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SpkApexcharts } from '../../spk-apexcharts/apexcharts';
import { ApexOptions } from 'ng-apexcharts';
import { SvgReplaceDirective } from '../../../app/shared/directives/svgReplace.directive';
interface card {
  title:string;
  value:string;
  change:string;
  changeClass:string;
  changeIcon:string;
  iconClass:string;
  svgPath:string;
  chartId:string;
  chartOptions:ApexOptions;
}
@Component({
  selector: 'spk-crm-card',
  imports: [SpkApexcharts, SvgReplaceDirective],
  templateUrl: './spk-crm-card.html',
  styleUrl: './spk-crm-card.scss'
})

export class SpkCrmCard {
  data=input<card>()
 
}


