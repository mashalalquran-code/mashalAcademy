import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
interface Option {
  label: string; // Adjust according to your option structure
  value: any;    // Use the appropriate type based on your data
}

@Component({
  selector: 'spk-ng-select',
  standalone: true,
  imports: [NgSelectModule, FormsModule, CommonModule],
  templateUrl: './spk-ng-select.html',
  styleUrl: './spk-ng-select.scss'
})
export class SpkNgSelect {
  options = input<any>([]); // Options for the select
  // TODO: Skipped for migration because:
  //  Your application code writes to the input. This prevents migration.
  defaultValue = input<any>([]);   // Default value for the select
  DefaultValue: any[] = [];   // Default value for the select
  bindValue = input<string>('')
  bindLabel = input<string>('')
  id = input<string>('');       // Additional classes
  mainClass = input<string>('');       // Additional classes
  maxSelectedItems = input<number>();       // Additional classes
  selectClass = input<string>('');       // Additional classes
  disabled = input<boolean>(false); // Disable the select
  clearable = input<boolean | undefined>(true); // Allow clearing of selection
  multiple = input<boolean | undefined>(false);   // Enable multiple selection
  multi = input<boolean | undefined>(false);
  addTag = input<boolean>(false);
  selectOnTab = input<boolean | undefined>(false);   // Enable multiple selection
  searchable = input<boolean | undefined>(true); // Enable searching
  hideSelected = input<boolean>(true); // Enable searching
  placeholder = input<string>('');      // Placeholder text
  value = input<string>('');
  additionalProperties = input<{
    [key: string]: any;
  }>({});
  change = output<Option | Option[]>(); // Emit value change
  extraProps = input<any>({});
  prop: any;
  image: any;
  selectedChange = output<any>(); // Emit changes in selection
  ngOnInit(): void {
    this.DefaultValue = this.defaultValue();
  }

  onSelectionChange(selected: any): void {
    this.selectedChange.emit(selected);
  }
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngAfterViewInit() {
    this.applyAdditionalProperties();
  }

  // Apply additional properties using Renderer2
  private applyAdditionalProperties() {
    const selectElement = this.el.nativeElement.querySelector('ng-select');

    const additionalProperties = this.additionalProperties();
    if (selectElement && additionalProperties) {
      Object.keys(additionalProperties).forEach(prop => {
        const value = this.additionalProperties()[prop];
        if (this.isValidAttributeName(prop)) {
          this.renderer.setAttribute(selectElement, prop, value);
        }
      });
    }
  }

  // Example attribute validation
  isValidAttributeName(name: string): boolean {
    const invalidCharacters = [' ', '|', ':', '/', '\\', ';', ','];
    return !invalidCharacters.some(char => name.includes(char));
  }

  onValueChange(event: any) {
  }
}


