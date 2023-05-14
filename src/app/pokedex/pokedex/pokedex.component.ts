import { Component, OnInit } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent {
  pokemonList: any[] = [];
  limit = 48;
  offset = 0;
  totalPokemon = 0;


  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.loadPokemon();
  }

  loadPokemon(): void {
    this.pokemonList = [];
    this.pokedexService.getPokemon(this.offset, this.limit).subscribe(response => {
      this.totalPokemon = response.count;
      const pokemonData = response.results;

      pokemonData.forEach((pokemon: any) => {
        this.pokedexService.getPokemonDetails(pokemon.url).subscribe(details => {
          this.pokemonList.push(details);
          this.pokemonList.sort((a, b) => a.id - b.id);
        });
      });
    });
  }



  nextPage(): void {
    if (this.offset + this.limit < this.totalPokemon) {
      this.offset += this.limit;
      this.loadPokemon();
    }
  }

  previousPage(): void {
    if (this.offset - this.limit >= 0) {
      this.offset -= this.limit;
      this.loadPokemon();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.totalPokemon / this.limit);
  }

  goToPage(page: number): void {
    this.offset = (page - 1) * this.limit;
    this.loadPokemon();
  }
}
