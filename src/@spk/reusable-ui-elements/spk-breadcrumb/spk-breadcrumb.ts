
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
export interface BreadcrumbItem {
  label: string;
  icon?: string; // Optional icon class
  isActive?: boolean;
  svgClass?: string;
  svgPath?:string;
  iconClass?: string;
  separatorIconPath?: string;
  prefixIconPath?: string; // Optional SVG path for prefix icon
  prefixIconPath1?: string;
  prefixIconClass?: string;
  separatorIconClass?: string; // CSS class for the separator icon
   isLast?: boolean;
}

@Component({
  selector: 'spk-breadcrumb',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './spk-breadcrumb.html',
  styleUrl: './spk-breadcrumb.scss'
})
export class SpkBreadcrumb {
   items = input<BreadcrumbItem[]>([]);
   defaultIconPath = input<string>('M6 13L10 3');
   defaultSeparatorPath = input<string>('M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14'); // Default separator path
   defaultPrefixClass = input<string>('flex-shrink-0 me-3 h-4 w-4 text-primary hover:text-primary dark:text-primary'); // Default prefix icon class
}


