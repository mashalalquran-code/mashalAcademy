
import { Component, ElementRef, Inject, Renderer2, DOCUMENT } from '@angular/core';
import { AppStateService } from '../../services/app-state.service';

@Component({
  selector: 'app-authentication-layout',
  standalone: false,
  templateUrl: './authentication-layout.html',
  styleUrl: './authentication-layout.scss'
})
export class AuthenticationLayout {
  constructor(
    @Inject(DOCUMENT) private document: Document, private elementRef: ElementRef,private appStateService: AppStateService,
    private renderer: Renderer2, private el: ElementRef

  ) {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.removeAttribute(htmlElement, 'data-nav-style', 'menu-click');
    this.renderer.removeAttribute(htmlElement, 'data-toggled', 'close');
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'vertical');
    this.renderer.removeAttribute(htmlElement, 'data-header-styles');
    this.renderer.removeAttribute(htmlElement, 'data-menu-styles');
    this.renderer.removeAttribute(htmlElement, 'data-width');
    this.renderer.removeAttribute(htmlElement, 'data-vertical-style');

  }
  ngOnDestroy(): void {
    this.renderer.removeClass(this.document.body, 'landing-body');
 
    document.body.classList.remove('authentication-background');
    
    const htmlElement =
    this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'vertical');
    this.renderer.removeAttribute(htmlElement, 'data-toggled');
    
    this.appStateService.updateState()

    // this.renderer.setAttribute(htmlElement, 'data-menu-styles', 'dark');


  }
}


