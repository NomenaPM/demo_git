import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EquipesComponent } from './equipes/equipes.component';
import { SelectionComponent } from './selection/selection.component';
import { MembresComponent } from './membres/membres.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'equipes', component: EquipesComponent },
  { path: 'equipes/selections', component: SelectionComponent },
  { path: 'equipes/membres', component: MembresComponent },
];