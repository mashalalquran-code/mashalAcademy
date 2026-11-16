import { CommonModule, ViewportScroller } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, DestroyRef, inject, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { LanguageService } from '../../shared/services/language.service';
import { LanguageSwitcher } from '../../shared/components/language-switcher/language-switcher';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import *  as landing from "../../shared/data/pages/landing";
import { SpkGlanceCards } from '../../../@spk/reusable-landing-card/spk-glance-cards/spk-glance-cards';
import { SpkServicesCard } from '../../../@spk/reusable-landing-card/spk-services-card/spk-services-card';
import { SpkPricingCard } from '../../../@spk/reusable-landing-card/spk-pricing-card/spk-pricing-card';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppStateService } from '../../shared/services/app-state.service';
import { SharedModule } from '../../shared/shared.module';
import { ColorPickerDirective } from 'ngx-color-picker';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
Swiper.use([Pagination]);
register();
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [TranslatePipe, LanguageSwitcher, SharedModule, ColorPickerDirective, CommonModule, SpkGlanceCards, SpkServicesCard, SpkPricingCard, FormsModule, RouterModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './landing.html',
  styleUrl: './landing.scss'
})
export class Landing {
  readonly language = inject(LanguageService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly changeDetector = inject(ChangeDetectorRef);

    @ViewChild('themeprimary', { static: false }) themeprimary!: ElementRef<HTMLButtonElement>;

  landingData = landing
  isYearly: boolean = false;
  public localdata: any = {};
  onToggle() {
  }
  thumbsSwiper: any;
  constructor(
    public renderer: Renderer2,
    private appStateService: AppStateService,
    private el: ElementRef,
    private elementRef: ElementRef, private sanitizer: DomSanitizer, private viewScroller: ViewportScroller
  ) {
    document.body.classList.add('landing-body');
    this.appStateService.state$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(state => {
      this.localdata = state;
      this.changeDetector.markForCheck();
    })
    let html = this.el.nativeElement.ownerDocument.documentElement;
    if (window.innerWidth <= 992) {
      html?.setAttribute('data-toggled', html?.getAttribute('data-toggled') == 'close' ? 'close' : 'close');
    }
    this.applyDefaultLayoutAttributes();
    this.language.syncDirection();
  }

  applyDefaultLayoutAttributes(): void {
    const htmlElement = this.elementRef.nativeElement.ownerDocument.documentElement;


    this.elementRef.nativeElement.ownerDocument.documentElement;
    this.renderer.setAttribute(htmlElement, 'data-nav-layout', 'horizontal');
    this.renderer.setAttribute(htmlElement, 'data-nav-style', 'menu-click');
    this.renderer.setAttribute(htmlElement, 'data-menu-position', 'fixed');
    this.renderer.removeAttribute(htmlElement, 'data-header-styles');
    this.renderer.removeAttribute(htmlElement, 'data-menu-styles');
    this.renderer.removeAttribute(htmlElement, 'data-vertical-style');
    this.renderer.removeAttribute(htmlElement, 'loader');
    this.renderer.removeAttribute(htmlElement, 'data-width');
    this.renderer.removeAttribute(htmlElement, 'body-bg-rgb');
    this.renderer.removeAttribute(htmlElement, 'body-bg-rgb2');
    this.renderer.removeAttribute(htmlElement, 'light-rgb');
    this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');

  }


  input1: string = "#00897B";
  scrolled: boolean = false;
  SwitcherService: any;

  setThumbsSwiper(swiper: any) {
    this.thumbsSwiper = swiper;
  }
  body!: HTMLBodyElement | null;

  public show: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.changeDetector.markForCheck();
    this.scrolled = window.scrollY > 10;
    const sections = this.el.nativeElement.querySelectorAll('.side-menu__item');
    const scrollPos =
      window.scrollY ||
      this.elementRef.nativeElement.ownerDocument.documentElement.scrollTop ||
      document.body.scrollTop;
    sections.forEach((el: any, i: string | number) => {
      const currLink = sections[i];
      const val: any = currLink.getAttribute('value');
      const refElement: any = this.el.nativeElement.querySelector('#' + val);

      if (refElement !== null) {
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          const activeNav =
            this.el.nativeElement.querySelector('.nav-scroll.active');
          if (activeNav) {
            this.renderer.removeClass(activeNav, 'active');
          }
          this.renderer.addClass(currLink, 'active');
        } else {
          this.renderer.removeClass(currLink, 'active');
        }
      }
    });
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.show = true;
    } else {
      this.show = false;
    }
  }

  activeSection: string = 'home';
  isActive: boolean = false;
  scroll(el: HTMLElement, section: string) {
    el.scrollIntoView({ behavior: 'smooth' });
    this.isActive = true;
    this.activeSection = section;
    let html = this.el.nativeElement.ownerDocument.documentElement;
    if (window.innerWidth <= 992) {
      html?.setAttribute('data-toggled', html?.getAttribute('data-toggled') == 'close' ? 'close' : 'close');
    }
  }
  isDataToggled = false;

  expande = false;
  expande1 = false;
  expande2 = false;
  isAnyChildActive(): boolean {
    return ['services', 'expectations', 'features'].includes(this.activeSection);
  }

  toggleExpand(): void {
    this.expande = !this.expande;
    if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    } else if (localStorage.getItem('data-menu-styles') == 'light') {
      document.querySelector('html')?.setAttribute('data-menu-styles', 'light');
    }
  }
  bodyclick() {
    this.expande1 = false;
    this.expande2 = false;
    this.expande = false;
    let html = this.el.nativeElement.ownerDocument.documentElement;
    if (window.innerWidth <= 992) {
      html?.setAttribute('data-toggled', html?.getAttribute('data-toggled') == 'close' ? 'close' : 'close');
    }
  }


  ngOnDestroy(): void {
    document.body.classList.remove('landing-body');
    this.appStateService.updateState();
    this.language.syncDirection();
  }

  updateTheme(theme: string) {
    this.appStateService.updateState({ theme, menuColor: theme, headerColor: theme, });
    this.applyDefaultLayoutAttributes()

  }

  updateDirection(direction: string) {
    // Reading direction is controlled by the selected language.
    this.language.syncDirection();
    this.applyDefaultLayoutAttributes()
  }
  updateprimary(themePrimary: string) {
    this.appStateService.updateState({ themePrimary });
    this.applyDefaultLayoutAttributes()

  }

  // primary theme change

  defaultPrimary = '#6c5ffc';
  public dynamicLightPrimary(data: any): void {
    this.defaultPrimary = data.color;
    this.updateprimary(this.defaultPrimary);

  }

  updateBackground(themeBackground: any) {
    this.appStateService.updateState({ themeBackground, menuColor: 'dark', headerColor: 'dark', theme: "dark" });
    this.applyDefaultLayoutAttributes()
  }
  public defaultBg = '#6c5ffc';
  public dynamicTranparentBgPrimary(data: any): void {
    this.defaultBg = data.color;

    const bgColor = {
      main: this.defaultBg,
      secondary: this.defaultBg,
      accent: this.defaultBg,
      overlay: 'rgba(255,255,255,0.1)',
      theme: 'dark',
    };

    this.updateBackground(bgColor);
  }
  reset(): void {
    // Restore the selected language after the existing theme reset.
    this.appStateService.applyReset();
    const html = this.elementRef.nativeElement.ownerDocument.documentElement;
    html.style.cssText = '';
    this.language.syncDirection();
    this.applyDefaultLayoutAttributes();
    this.themeprimary?.nativeElement.style.removeProperty('background');
  }

  toggleSidebar() {
    const htmlElement =
      this.elementRef.nativeElement.ownerDocument.documentElement;
    const currentToggleValue = htmlElement.getAttribute('data-toggled');

    if (currentToggleValue !== 'open') {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'open');
    } else {
      this.renderer.setAttribute(htmlElement, 'data-toggled', 'close');
    }
  }



  breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    500: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1110: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  };
  taptotop() {
    let body: any = document.querySelector('body')
    body.style.scrollBehavior = 'smooth';
    this.viewScroller.scrollToPosition([0, 0]);
  }

  sanitizeIcon(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }






  eventTriggered: boolean = false;
  screenWidth!: number;
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.menuResizeFn();
    this.screenWidth = window.innerWidth;

    // Check if the event hasn't been triggered and the screen width is less than or equal to your breakpoint
    if (!this.eventTriggered && this.screenWidth <= 996) {
      document.documentElement?.setAttribute('data-toggled', 'close')
      // Trigger your event or perform any action here
      this.eventTriggered = true; // Set the flag to true to prevent further triggering
    } else if (this.screenWidth > 996) {
      // Reset the flag when the screen width goes beyond the breakpoint
      this.eventTriggered = false;
    }
  }

  WindowPreSize: number[] = [window.innerWidth];
  menuResizeFn(): void {
    this.WindowPreSize.push(window.innerWidth);

    if (this.WindowPreSize.length > 2) {
      this.WindowPreSize.shift();
    }
    if (this.WindowPreSize.length > 1) {
      const html = document.documentElement;

      if (this.WindowPreSize[this.WindowPreSize.length - 1] < 992 && this.WindowPreSize[this.WindowPreSize.length - 2] >= 992) {
        // less than 992
        html.setAttribute('data-toggled', 'close');
      }

      if (this.WindowPreSize[this.WindowPreSize.length - 1] >= 992 && this.WindowPreSize[this.WindowPreSize.length - 2] < 992) {
        // greater than 992
        html.removeAttribute('data-toggled');
        document.querySelector('#responsive-overlay')?.classList.remove('active');
      }
    }
  }

}


