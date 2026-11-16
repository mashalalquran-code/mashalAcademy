import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, firstValueFrom } from 'rxjs';
import { AppStateService } from './app-state.service';

export type AppLanguage = 'eng' | 'fs' | 'ps';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly appState = inject(AppStateService);
  private readonly router = inject(Router);
  private readonly selected = signal<AppLanguage>('eng');
  private readonly storageKey = 'mashalify-language';

  readonly current = this.selected.asReadonly();
  readonly direction = computed(() => this.current() === 'eng' ? 'ltr' : 'rtl');
  readonly loading = signal(false);
  readonly error = signal(false);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed(),
    ).subscribe(() => this.syncDirection());
  }

  isSupported(value: unknown): value is AppLanguage {
    return value === 'eng' || value === 'fs' || value === 'ps';
  }

  private normalize(value: unknown): AppLanguage {
    if (this.isSupported(value)) return value;
    if (value === 'fa-AF' || value === 'fa') return 'fs';
    return 'eng';
  }

  async initialize(): Promise<void> {
    this.translate.addLangs(['eng', 'fs', 'ps']);
    let language: AppLanguage = 'eng';
    if (this.browser) {
      try {
        language = this.normalize(localStorage.getItem(this.storageKey));
      } catch { }
    }
    await firstValueFrom(this.translate.use('eng'));
    this.commit('eng');
    if (language !== 'eng') await this.setLanguage(language);
  }

  async setLanguage(value: unknown): Promise<void> {
    if (!this.isSupported(value) || this.loading()) return;
    this.loading.set(true);
    this.error.set(false);
    try {
      await firstValueFrom(this.translate.use(value));
      this.commit(value);
    } catch (error) {
      this.error.set(true);
      console.error('Unable to load translation file:', error);
    } finally {
      this.loading.set(false);
    }
  }

  private commit(language: AppLanguage): void {
    this.selected.set(language);
    this.syncDirection();
  }

  syncDirection(): void {
    this.appState.setDirection(this.direction());
    // Your app codes map to standard HTML language tags.
    const tags: Record<AppLanguage, string> = { eng: 'en', fs: 'fa-AF', ps: 'ps' };
    this.document.documentElement.setAttribute('lang', tags[this.current()]);
    this.document.documentElement.setAttribute('dir', this.direction());
    if (this.browser) {
      try { localStorage.setItem(this.storageKey, this.current()); } catch { }
    }
  }
}
