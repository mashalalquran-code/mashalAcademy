
import { Component } from '@angular/core';
import { NavigationEnd, Router, Event, RouterOutlet } from '@angular/router';
import { AppStateService } from './shared/services/app-state.service';

import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  imports: [SharedModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'Zynix';
  constructor(private appState: AppStateService, private router: Router) {
    this.appState.updateState();
  }

  ngOnInit() {

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => window.HSStaticMethods.autoInit(), 100);
      }
    });
  }
}


