import { Component, TemplateRef, input, output } from '@angular/core';

@Component({
    selector: 'spk-dropdowns',
    standalone: true,
    imports: [],
    templateUrl: './spk-dropdowns.html',
    styleUrl: './spk-dropdowns.scss'
})
export class SpkDropdowns {
    bsPrefix = input<string>();
    as = input<TemplateRef<any>>();
    toggleas = input<TemplateRef<any>>();
    Menuas = input<TemplateRef<any>>();
    Align = input<"start" | "end" | {
        sm: "start" | "end";
    } | {
        md: "start" | "end";
    } | {
        lg: "start" | "end";
    } | {
        xl: "start" | "end";
    } | {
        xxl: "start" | "end";
    }>();
    Menualign = input<"start" | "end" | {
        sm: "start" | "end";
    } | {
        md: "start" | "end";
    } | {
        lg: "start" | "end";
    } | {
        xl: "start" | "end";
    } | {
        xxl: "start" | "end";
    }>();
    Customclass = input<string>();
    Buttontext = input<string>();
    title = input<string>();
    Drop = input<'up' | 'up-centered' | 'start' | 'end' | 'down' | 'down-centered'>();
    Togglevariant = input<string>();
    Menulabel = input<string>();
    Menuclass = input<string>();
    Show = input<boolean>();
    Toggleshow = input<boolean>();
    Flip = input<boolean>();
    Menuvariant = input<string>();
    autoClose = input<true | 'outside' | 'inside' | false>();
    Id = input<string>();
    class = input<string>();
    iconPosition = input<string>();
    Imagetag = input<boolean>();
    Imagename = input<string>();
    Imagesrc = input<string>();
    Imageclass = input<string>();
    placement = input<any>('');
    Icon = input<boolean>();
    IconClass = input<string>();
    Toggletext = input<string>();
    color = input<string>();
    Buttonposition = input<string>();
    SvgClass = input<string>();
    Svgicon = input<string>();
    Custommenuclass = input<string>();
    ulclass = input<string>();
    Badgecolor = input<string>();
    Badgepill = input<boolean>();
    Badgeid = input<string>();
    Active = input<boolean>();
    Badgetext = input<string>();
    Disabled = input<boolean>();
    Badgeclass = input<string>();
    splitTitle = input<string>();
    Svgaftertext = input<string>();
    Buttontag = input<boolean>();
    Badgetag = input<boolean>();
    Split = input<boolean>();
    Arrowicon = input<boolean>();
    Svg = input<boolean>();
    splitbutton = input<boolean>();
    splitbuttonEnd = input<boolean>();
    splitbuttonClass = input<string>();
    Size = input<'sm' | 'lg'>();
    Navigate = input<string>();
    onTogglefunc = output<boolean>();
    onSelectfunc = output<string | null>();
    dropdownItems = input<Array<{
        label: string;
        link?: string;
    }>>([
        { label: 'Action', link: 'javascript:void(0);' },
        { label: 'Another action', link: 'javascript:void(0);' },
        { label: 'Something else here', link: 'javascript:void(0);' },
    ]);
    toggleDropdown(isOpen: boolean) {
        this.onTogglefunc.emit(isOpen);
    }

    selectOption(eventKey: string | null, event: Event) {
        this.onSelectfunc.emit(eventKey);
    }
}


