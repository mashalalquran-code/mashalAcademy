import { Component, input } from '@angular/core';
import { Gallery, GalleryModule, ImageItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox, LightboxModule } from 'ng-gallery/lightbox';

@Component({
  selector: 'spk-gallery',
  standalone: true,
  imports: [GalleryModule,LightboxModule],
  templateUrl: './spk-gallery.html',
  styleUrl: './spk-gallery.scss'
})
export class SpkGallery {
   imageData = input<any>([]);
   imageData1 = input<any>([]);
   mainClass = input<any>();
   colClass = input<any>();
   lightboxClass = input<string>('');
  // TODO: Skipped for migration because:
  //  This input is used in a control flow expression (e.g. `@if` or `*ngIf`)
  //  and migrating would break narrowing currently.
   badge = input<any>();
   gallerize = input<boolean>(false);

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}
  ngOnInit() {
    /** Basic Gallery Example */

    // Creat gallery items
    // this.items = this.imageData.map(
    //   (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    // );

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
  }
}


