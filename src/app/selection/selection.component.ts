import { Component } from '@angular/core';
import { SelectionTableComponent } from "../selection-table/selection-table.component";

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [SelectionTableComponent],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss'
})
export class SelectionComponent {

}
