import { Component } from '@angular/core';

interface Game {
  image: string;
  name: string;
}

interface Generation {
  title: string;
  description: string;
  games: Game[];
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  generations: Generation[] = [
    {
      title: 'Primera generación',
      description: 'Esta generación también suele ser llamada generación cromática o generación color, por el nombre de cada videojuego (rojo, azul y amarillo), y de forma menos común es denominada era monocromática, porque los videojuegos fueron hechos específicamente para la videoconsola Game Boy, en blanco y negro.',
      games: [
        { image: 'assets/videogames/rojo.webp', name: 'pokemon rojo' },
        { image: 'assets/videogames/amarillo.webp', name: 'pokemon amarillo' },
        { image: 'assets/videogames/azul.webp', name: 'pokemon azul' },
      ]
    },
    {
      title: 'Segunda generación',
      description: 'La segunda generación también se conoce como generación metálica...',
      games: [
        { image: 'assets/videogames/oro.webp', name: 'pokemon oro' },
        { image: 'assets/videogames/plata.webp', name: 'pokemon plata' },
        { image: 'assets/videogames/cristal.webp', name: 'pokemon cristal' },
      ]
    },
    {
      title: 'Tercera generación',
      description: 'Esta generación también suele ser llamada generación Advance...',
      games: [
        { image: 'assets/videogames/rubi.webp', name: 'pokemon rubi' },
        { image: 'assets/videogames/zafiro.webp', name: 'pokemon zafiro' },
        { image: 'assets/videogames/esmeralda.webp', name: 'pokemon esmeralda' },
      ]
    },
    {
      title: 'Cuarta generación',
      description: 'Los videojuegos que conforman esta generación son...',
      games: []
    },
    {
      title: 'Quinta generación',
      description: 'Los videojuegos que conforman esta generación son...',
      games: []
    },
    {
      title: 'Sexta generación',
      description: 'Los videojuegos que conforman esta generación son...',
      games: []
    },
    {
      title: 'Séptima generación',
      description: 'Los videojuegos que conforman esta generación son...',
      games: []
    },
    {
      title: 'Octava generación',
      description: 'Los videojuegos que conforman esta generación son...',
      games: []
    },
    {
      title: 'Novena generación',
      description: 'Los videojuegos que conforman esta generación son...',
      games: []
    },
  ];
}
