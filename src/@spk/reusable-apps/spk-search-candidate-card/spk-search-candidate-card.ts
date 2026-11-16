import { NgClass } from '@angular/common';
import { Component, Input, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
interface CandidatesType {
  avatar: string
  name: string
  role: string
  location: string
  salaryStart: string
  salaryEnd?: string
  languages: string
  bond?: string
  experience: string;
  wishlisted:boolean
}
@Component({
  selector: 'spk-search-candidate-card',
  imports: [NgClass,RouterLink],
  templateUrl: './spk-search-candidate-card.html',
  styleUrl: './spk-search-candidate-card.scss'
})
export class SpkSearchCandidateCard {
  candidate = input<any>()

  wishlistToggled = output<CandidatesType>(); // Output event to notify parent


  toggleWishlist() {
    const currentJob = this.candidate();
    if (!currentJob) {
      return; // Exit if job is undefined
    }
    const updatedJob: CandidatesType = {
      ...currentJob,
      wishlisted: !currentJob.wishlisted
    };
    this.wishlistToggled.emit(updatedJob); // Emit the updated job
  }
}


