import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-spk-progress',
  imports: [],
  templateUrl: './spk-progress.html',
  styleUrl: './spk-progress.scss'
})
export class SpkProgress {
 progressClass= input<string>("");
  role=input<string>("");
  ariaValuenow=input<string>("");
  ariaValuemin=input<string>("");
  ariavaluemax=input<string>("");
}


