import { Component } from '@angular/core';
import { TableMembreComponent } from "../table-membre/table-membre.component";

@Component({
  selector: 'app-membres',
  standalone: true,
  imports: [TableMembreComponent],
  templateUrl: './membres.component.html',
  styleUrl: './membres.component.scss'
})
export class MembresComponent {

}
