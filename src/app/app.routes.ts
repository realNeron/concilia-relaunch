import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErstinformationenComponent } from './pages/erstinformationen/erstinformationen.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { DatenschutzComponent } from './pages/datenschutz/datenschutz.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'erstinformationen', component: ErstinformationenComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: '**', redirectTo: '' }
];
