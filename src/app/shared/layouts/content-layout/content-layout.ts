import { Component, DOCUMENT, ElementRef, Inject, Renderer2 } from '@angular/core';
import { Menu, NavService } from '../../services/nav.service';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-content-layout',
  standalone: false,
  templateUrl: './content-layout.html',
  styleUrl: './content-layout.scss',
})
export class ContentLayout {
  public menuItems!: Menu[];
  menuitemsSubscribe$!: Subscription
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private navServices: NavService, private router: Router,
    private elementRef: ElementRef, private renderer: Renderer2,
    private appStateService: AppStateService,
  ) {
    this.menuitemsSubscribe$ = this.navServices.items.subscribe((items: any) => {
      this.menuItems = items;
    });
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0);
      });

    let html = this.doc.documentElement;
    this.appStateService.state$.subscribe(state => {
      if (state) {
        if (window.innerWidth <= 992) {
          html?.setAttribute('data-toggled', html?.getAttribute('data-toggled') == 'close' ? 'close' : 'close');
        }
        if (state.menuStyles == 'menu-hover' || state.menuStyles == 'icon-hover') {
          this.clearNav()
        }
      }

    });
    if (window.innerWidth <= 992) {
      html?.setAttribute('data-toggled', html?.getAttribute('data-toggled') == 'close' ? 'close' : 'close ');
    }


  }


  clearNav() {
    this.menuItems?.forEach((a: any) => {
      a.active = false;
      a?.children?.forEach((b: any) => {
        b.active = false;
        b?.children?.forEach((c: any) => {
          c.active = false;
        });
      });
    });
  }

  clearNavDropdown() {

    this.menuItems?.forEach((a: any) => {
      if (this.menuItems) {
        a.active = false;
      }
      a?.children?.forEach((b: any) => {
        if (a.children) {
          b.active = false;
        }
      });
    });
  }
  clickOnBody() {
    document.querySelector('#responsive-overlay')?.classList.remove('active');
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    if (window.innerWidth <= 992) {
      html?.setAttribute('data-toggled', html?.getAttribute('data-toggled') == 'close' ? 'close' : 'close');
    }
    html?.removeAttribute('data-icon-text');


    this.menuItem.active = !this.menuItem.active;

    if (html.getAttribute('data-nav-layout') == 'horizontal' && window.innerWidth >= 992) { this.clearNavDropdown(); }
    const navStyle = document.documentElement.getAttribute('data-nav-style');
    if (navStyle === 'menu-click' || navStyle === 'menu-hover' || navStyle === 'icon-click' || navStyle === 'icon-hover') {
      document.querySelector('.double-menu-active')?.setAttribute('style', 'display: none;');
    }
  }
  menuItem = {
    active: false,
  };

  layoutClass: string = 'container-fluid'; // Default class

  ngOnInit(): void {
    // Set the initial class based on the current route
    this.updateLayoutClass(this.router.url);

    // Listen for route changes and update the class
    this.router.events.subscribe(() => {
      this.updateLayoutClass(this.router.url);
    });

  }

  private updateLayoutClass(currentRoute: string): void {
    // Replace 'your-component-route' with the actual route of the component
    if (currentRoute === '/pages/terms-conditions' || currentRoute === '/pages/faqs') {
      this.layoutClass = 'container'; // Apply 'container' class
    } else {
      this.layoutClass = 'container-fluid'; // Default to 'container-fluid'
    }
  }
  clearToggle() {
    let html = this.elementRef.nativeElement.ownerDocument.documentElement;
    html?.setAttribute('data-toggled', 'close');
    document.querySelector('#responsive-overlay')?.classList.remove('active');
  }
}


