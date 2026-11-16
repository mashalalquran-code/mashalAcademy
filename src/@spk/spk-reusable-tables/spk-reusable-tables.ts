
import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'spk-reusable-tables',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,NgClass],
  templateUrl: './spk-reusable-tables.html',
  styleUrl: './spk-reusable-tables.scss'
})
export class SpkReusableTables {
  columns = input<any[]>([]);
  tableClass = input<string>('');
  trHeadClass = input<string>('');
  tableHead = input<string>('');
  tableFooter = input<string>('');
  tableBody = input<string>('');
  trClass = input<string>('');
  checkboxClass = input<string>('');
  checkboxinputClass = input<string>('');
  tableFoot = input<string>('');
  tableHeadColumn = input<string>('');
  data = input<any[]>([]);
  title = input<any[]>([]);
  footerData = input<any[]>([]);
  showFooter = input<boolean>(false);
  showCheckbox = input<boolean>(false);
  rows = input<{
    checked: boolean;
    [key: string]: any;
  }[]>([]);
  allTasksChecked!: boolean;
  tableData: any;
  toggleSelectAll = output<boolean>();
  openDetails = output<any>();

  // Toggle select/deselect all checkboxes
  onToggleSelectAll(event: any) {
    this.toggleSelectAll.emit(event.target.checked);
  }
  toggleRowChecked(row: any) {
    row.checked = !row.checked;
    this.allTasksChecked = this.data().every(row => row.checked);
  }

  // Update the "Select All" checkbox based on row selections
  updateSelectAllCheckbox(): void {
    this.allTasksChecked = this.data().every(row => row.checked); // Check if all rows are selected
  }
}


