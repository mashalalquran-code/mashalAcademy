import { Directive, ElementRef, OnChanges, SimpleChanges, Renderer2, input } from '@angular/core';

@Directive({
  selector: '[appSvgReplace]'
})
export class SvgReplaceDirective implements OnChanges {

   appSvgReplace = input<string>('');

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appSvgReplace']) {
      this.replaceWithSvg();
    }
  }

  private replaceWithSvg(): void {
    const svgContainer = this.el.nativeElement;
    // Remove the current element
    this.renderer.setProperty(svgContainer, 'innerHTML', this.appSvgReplace());
  }
}
