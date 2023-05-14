import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokedexFilterComponent } from './pokedex-filter/pokedex-filter.component';

@NgModule({
  declarations: [
    PokedexComponent,
    PokedexFilterComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ],
})
export class PokedexModule { }
