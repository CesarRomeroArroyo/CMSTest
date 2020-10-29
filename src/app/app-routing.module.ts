import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'publications',
    loadChildren: () => import('./pages/publications/publications.module').then( m => m.PublicationsPageModule)
  },
  { path: '', redirectTo: '/publications', pathMatch: 'full' },
  { path: '**', redirectTo: '/publications'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
