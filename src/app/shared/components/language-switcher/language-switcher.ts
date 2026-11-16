import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <label class="language-picker">
      <span class="visually-hidden">{{ 'common.language' | translate }}</span>
      <select
        [value]="language.current()"
        [disabled]="language.loading()"
        [attr.aria-label]="'common.language' | translate"
        (change)="change($event)"
      >
        <option value="eng" lang="en" dir="ltr">English</option>
        <option value="fs" lang="fa-AF" dir="rtl">فارسی / دری</option>
        <option value="ps" lang="ps" dir="rtl">پښتو</option>
      </select>
    </label>
    @if (language.error()) {
      <span role="alert" class="load-error">{{ 'common.languageError' | translate }}</span>
    }
  `,
  styles: `
    :host { display: inline-flex; align-items: center; gap: .5rem; }
    .language-picker { display: inline-flex; align-items: center; }
    select { max-width: 10rem; border: 1px solid currentColor;
      border-radius: .375rem; padding: .4rem .65rem;
      background: transparent; color: inherit; font: inherit; }
    option { background: #ffffff; color: #111827; }
    .visually-hidden { position: absolute; width: 1px; height: 1px;
      overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
    .load-error { font-size: .8rem; }
  `,
})
export class LanguageSwitcher {
  readonly language = inject(LanguageService);

  async change(event: Event): Promise<void> {
    const select = event.target as HTMLSelectElement;
    await this.language.setLanguage(select.value);
    // Restore the actual selection if loading the requested file failed.
    select.value = this.language.current();
  }
}
