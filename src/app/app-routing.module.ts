import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then((m) => m.HomeModule) },
  {
    path: 'pokedex',
    loadChildren: () => import('./pokedex/pokedex.module').then((m) => m.PokedexModule),
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then((m) => m.HistoryModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
