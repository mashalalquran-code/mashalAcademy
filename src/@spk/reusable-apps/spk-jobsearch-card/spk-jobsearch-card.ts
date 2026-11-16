
import { DecimalPipe, NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
interface JobListingsType {
  bgIcon: string;
  iconClass: string;
  icon: string;
  job: string;
  company: string;
  location: string;
  openings: string;
  qualification: string;
  experience: string;
  shifts: string;
  salary: string;
  wishlisted: boolean;
}

@Component({
  selector: 'spk-jobsearch-card',
  standalone: true,
  imports: [NgClass,DecimalPipe],
  templateUrl: './spk-jobsearch-card.html',
  styleUrl: './spk-jobsearch-card.scss'
})
export class SpkJobsearchCard {
  job = input<JobListingsType>();
  wishlistToggled = output<JobListingsType>(); // Output event to notify parent


  toggleWishlist() {
    const currentJob = this.job();
    if (!currentJob) {
      return; // Exit if job is undefined
    }
    const updatedJob: JobListingsType = {
      ...currentJob,
      wishlisted: !currentJob.wishlisted
    };
    this.wishlistToggled.emit(updatedJob); // Emit the updated job
  }
}


