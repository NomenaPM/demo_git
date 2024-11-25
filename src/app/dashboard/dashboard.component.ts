import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";


@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  imports: [NavbarComponent],
})
export class DashboardComponent implements OnInit {
  fullDate!: string;
  isMenuVisible: boolean = false;

  ngOnInit(): void {
    this.newDate();
  }

  newDate(): void {
    const currentDate = new Date();

    // Options pour afficher le jour de la semaine et le mois en toutes lettres
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    // Utilisation de toLocaleDateString pour formatter en français
    this.fullDate = currentDate.toLocaleDateString('fr-FR', options);
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
