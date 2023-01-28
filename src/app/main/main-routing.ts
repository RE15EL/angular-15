import { Routes } from "@angular/router";
import { NotFoundComponent } from "../components/not-found/not-found.component";



export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('../components/home/home.component').
      then(m => m.HomeComponent)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];
