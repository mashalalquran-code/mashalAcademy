import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerComponent, ColorPickerDirective, ColorPickerService } from 'ngx-color-picker';

import { SvgReplaceDirective } from './directives/svgReplace.directive';
import { AuthenticationLayout } from './layouts/authentication-layout/authentication-layout';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ContentLayout } from './layouts/content-layout/content-layout';
import { TabToTop } from './components/tab-to-top/tab-to-top';
import { Switcher } from './components/switcher/switcher';
import { Sidebar } from './components/sidebar/sidebar';
import { HoverEffectSidebarDirective } from './directives/hover-effect-sidebar.directive';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';
import { NgxParticlesModule } from '@tsparticles/angular';
import { FullscreenDirective } from './directives/fullscreen.directive';
import {
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';

import { LanguageSwitcher } from './components/language-switcher/language-switcher';


@NgModule({
    declarations: [
     

        AuthenticationLayout,
        Header,
        Footer,
        ContentLayout,
        TabToTop,
        Switcher,
        Sidebar,
        HoverEffectSidebarDirective
    ],

    imports: [
        CommonModule,
        RouterModule,
        OverlayscrollbarsModule,
        FormsModule,
        SvgReplaceDirective,
        ReactiveFormsModule,
        ColorPickerComponent,
        ColorPickerDirective,
        NgxParticlesModule,
        FullscreenDirective,
          TranslatePipe,
    TranslateDirective,
    LanguageSwitcher,

    ],
    exports: [
        Sidebar,
        
        AuthenticationLayout,
        Header,
        NgxParticlesModule,
        SvgReplaceDirective,
        Footer,
        ContentLayout,
        Switcher,
        HoverEffectSidebarDirective,
        TranslatePipe,
    TranslateDirective,
    LanguageSwitcher,

    ]
})

export class SharedModule { }
