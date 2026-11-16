import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, input } from '@angular/core';

@Component({
  selector: 'spk-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spk-toast.html',
  styleUrl: './spk-toast.scss'
})
export class SpkToast {

    classlist = input(''); // Content of the toast
    id = input(''); // Content of the toast

}


