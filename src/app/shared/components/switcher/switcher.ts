import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  ElementRef,
  Renderer2,
  ViewChild,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppStateService } from '../../services/app-state.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-switcher',
  standalone: false,
  templateUrl: './switcher.html',
  styleUrls: ['./switcher.scss'],
})
export class Switcher {
  @ViewChild('themeprimary') themeprimary?: ElementRef<HTMLButtonElement>;
  @ViewChild('themebackground') themebackground?: ElementRef<HTMLButtonElement>;

  readonly language = inject(LanguageService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly changeDetector = inject(ChangeDetectorRef);

  active = 1;
  public localdata: any = {};
  defaultPrimary = '#6c5ffc';
  public defaultBg = '#6c5ffc';
  private layoutTimer?: ReturnType<typeof setTimeout>;

  constructor(
    private elementRef: ElementRef,
    private appStateService: AppStateService,
    private renderer: Renderer2,
  ) {
    this.appStateService.state$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(state => {
        this.localdata = state;
        this.changeDetector.markForCheck();
      });

    this.destroyRef.onDestroy(() => {
      if (this.layoutTimer !== undefined) clearTimeout(this.layoutTimer);
    });
  }

  private get doc(): Document {
    return this.elementRef.nativeElement.ownerDocument;
  }

  Selector = (selector: string): HTMLElement | null =>
    this.doc.querySelector<HTMLElement>(selector);

  SelectorAll = (selector: string): NodeListOf<HTMLElement> =>
    this.doc.querySelectorAll<HTMLElement>(selector);

  private patchState(changes: any): void {
    this.appStateService.updateState(changes);
    // The selected language owns direction, independently of theme and layout.
    this.language.syncDirection();
  }

  updateTheme(theme: string): void {
    if (theme !== 'light' && theme !== 'dark') return;
    this.patchState({ theme, themeBackground: '', headerColor: theme, menuColor: theme });
    for (const property of [
      '--color-bodybg', '--color-darkbg', '--color-light', '--color-inputborder',
    ]) {
      this.doc.documentElement.style.removeProperty(property);
    }
  }

  updatemenuType(navigationStyles: string): void {
    if (navigationStyles === 'horizontal') {
      this.patchState({ navigationStyles, menuStyles: 'menu-click', layoutStyles: '' });
      this.checkMenuElement('menu-click');
      const sidebar = this.Selector('.main-menu');
      if (sidebar) sidebar.style.marginInline = '0px';
      if (this.layoutTimer !== undefined) clearTimeout(this.layoutTimer);
      this.layoutTimer = setTimeout(() => this.Selector('.main-content')?.click(), 100);
    } else if (navigationStyles === 'vertical') {
      this.patchState({ navigationStyles, menuStyles: '', layoutStyles: 'default' });
    }
  }

  private checkMenuElement(menuStyles: string): void {
    const elementIds: Record<string, string> = {
      'menu-click': 'switcher-menu-click',
      'menu-hover': 'switcher-menu-hover',
      'icon-hover': 'switcher-icon-hover',
      'icon-click': 'switcher-icon-click',
    };
    const id = elementIds[menuStyles] ?? 'switcher-menu-click';
    const input = this.doc.getElementById(id) as HTMLInputElement | null;
    if (input) input.checked = true;
  }

  updatemenuStyle(menuStyles: string): void {
    this.patchState({ menuStyles, layoutStyles: '' });
    if (menuStyles === 'icon-hover') {
      this.Selector('.double-menu-active')?.setAttribute('style', 'display: none;');
    }
    if (menuStyles === 'icon-hover' || menuStyles === 'icon-click') {
      const sidebar = this.Selector('.main-menu');
      if (sidebar) sidebar.style.marginInline = '0px';
    }
  }

  updatelayoutStyles(layoutStyles: string): void {
    this.patchState({ layoutStyles, menuStyles: '', navigationStyles: '' });
    this.Selector('.slide-menu')?.classList.toggle(
      'double-menu-active',
      this.doc.documentElement.getAttribute('data-vertical-style') === 'doublemenu',
    );
  }

  setAttr(key: string, value: string): void {
    this.renderer.setAttribute(this.doc.documentElement, key, value);
    if (key === 'dir' || key === 'lang') this.language.syncDirection();
  }

  removeAttr(key: string): void {
    this.renderer.removeAttribute(this.doc.documentElement, key);
    if (key === 'dir' || key === 'lang') this.language.syncDirection();
  }

  updatepageStyles(pageStyles: string): void { this.patchState({ pageStyles }); }
  updatewidthStyles(widthStyles: string): void { this.patchState({ widthStyles }); }
  updatemenuPosition(menuPosition: string): void { this.patchState({ menuPosition }); }
  updateheaderPosition(headerPosition: string): void { this.patchState({ headerPosition }); }
  updatemenuColor(menuColor: string): void { this.patchState({ menuColor }); }
  updateheaderColor(headerColor: string): void { this.patchState({ headerColor }); }
  updateprimary(themePrimary: string): void { this.patchState({ themePrimary }); }
  updateBgImage(backgroundImage: string): void { this.patchState({ backgroundImage }); }

  updateBackground(themeBackground: any): void {
    this.patchState({ themeBackground, headerColor: 'dark', menuColor: 'dark', theme: 'dark' });
  }

  dynamicLightPrimary(data: { color: string }): void {
    this.defaultPrimary = data.color;
    this.updateprimary(this.defaultPrimary);
  }

  convertRgbToIndividual(value: string): string {
    return (value.match(/\d+/g) ?? []).join(' ');
  }

  dynamicTranparentBgPrimary(data: { color: string }): void {
    const values = this.convertRgbToIndividual(data.color).split(' ').map(Number);
    if (values.length < 3 || values.slice(0, 3).some(value => !Number.isFinite(value))) return;
    this.defaultBg = data.color;
    const [r, g, b] = values;
    const mainHex = this.rgbToHex(r, g, b);
    const secondaryHex = this.rgbToHex(r + 14, g + 14, b + 14);
    this.updateBackground({
      main: mainHex,
      secondary: secondaryHex,
      accent: secondaryHex,
      overlay: 'rgba(255,255,255,0.1)',
      theme: 'dark',
    });
  }

  private rgbToHex(r: number, g: number, b: number): string {
    const hex = (value: number) => Math.max(0, Math.min(255, Math.round(value)))
      .toString(16).padStart(2, '0');
    return `#${hex(r)}${hex(g)}${hex(b)}`;
  }

  reset(): void {
    this.appStateService.applyReset();
    this.language.syncDirection();
    this.defaultPrimary = this.localdata?.themePrimary || '#6c5ffc';
    this.defaultBg = '#6c5ffc';
    this.themeprimary?.nativeElement.style.removeProperty('background');
    this.themebackground?.nativeElement.style.removeProperty('background');
  }
}
