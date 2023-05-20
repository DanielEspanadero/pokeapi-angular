import { Component } from '@angular/core';

interface Game {
  image: string;
  name: string;
  special: boolean;
}

interface Generation {
  title: string;
  description: string;
  games: Game[];
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  generations: Generation[] = [
    {
      title: 'Primera generación',
      description:
        'Esta generación también suele ser llamada generación cromática o generación color, por el nombre de cada videojuego (rojo, azul y amarillo), y de forma menos común es denominada era monocromática, porque los videojuegos fueron hechos específicamente para la videoconsola Game Boy, en blanco y negro.',
      games: [
        {
          image: 'assets/videogames/rojo.webp',
          name: 'pokemon rojo',
          special: false,
        },
        {
          image: 'assets/videogames/amarillo.webp',
          name: 'pokemon amarillo',
          special: false,
        },
        {
          image: 'assets/videogames/azul.webp',
          name: 'pokemon azul',
          special: false,
        },
      ],
    },
    {
      title: 'Segunda generación',
      description:
        'La segunda generación también se conoce como generación metálica, por el nombre de cada videojuego, que recibía la coletilla de un metal (oro, plata y cristal). De forma menos común es denominada era color o era de Game Boy Color, porque los videojuegos fueron desarrollados para la videoconsola Game Boy Color. Los videojuegos que conforman esta generación son:',
      games: [
        {
          image: 'assets/videogames/oro.webp',
          name: 'pokemon oro',
          special: false,
        },
        {
          image: 'assets/videogames/plata.webp',
          name: 'pokemon plata',
          special: false,
        },
        {
          image: 'assets/videogames/cristal.webp',
          name: 'pokemon cristal',
          special: false,
        },
      ],
    },
    {
      title: 'Tercera generación',
      description:
        'Esta generación también suele ser llamada generación Advance. Se caracterizó por ser la primera en introducir gráficos en color y contar con una mejora significativa en la jugabilidad y los gráficos en comparación con las generaciones anteriores. Los videojuegos que conforman esta generación son:',
      games: [
        {
          image: 'assets/videogames/rubi.webp',
          name: 'pokemon rubi',
          special: false,
        },
        {
          image: 'assets/videogames/zafiro.webp',
          name: 'pokemon zafiro',
          special: false,
        },
        {
          image: 'assets/videogames/esmeralda.webp',
          name: 'pokemon esmeralda',
          special: false,
        },
      ],
    },
    {
      title: 'Cuarta generación',
      description:
        'La cuarta generación de videojuegos de Pokémon se desarrolló para la consola Nintendo DS. Introdujo las formas evolucionadas de Pokémon de generaciones anteriores y el concepto de dimensiones con la Distorsión del Mundo. Los videojuegos que conforman esta generación son:',
      games: [
        {
          image: 'assets/videogames/diamante.webp',
          name: 'pokemon diamante',
          special: false,
        },
        {
          image: 'assets/videogames/perla.webp',
          name: 'pokemon perla',
          special: false,
        },
        {
          image: 'assets/videogames/platino.webp',
          name: 'pokemon platino',
          special: false,
        },
      ],
    },

    {
      title: 'Quinta generación',
      description:
        'La quinta generación de videojuegos de Pokémon también se desarrolló para la consola Nintendo DS. Introdujo una nueva región, Unova, y nuevos Pokémon, sin formas previas o posteriores hasta la fecha. Los videojuegos que conforman esta generación son:',
      games: [
        {
          image: 'assets/videogames/blanco.jpg',
          name: 'pokemon blanco',
          special: false,
        },
        {
          image: 'assets/videogames/negro.jpg',
          name: 'pokemon negro',
          special: false,
        },
        {
          image: 'assets/videogames/blanco2.webp',
          name: 'pokemon blanco 2',
          special: false,
        },
        {
          image: 'assets/videogames/negro2.webp',
          name: 'pokemon negro 2',
          special: false,
        },
      ],
    },
    {
      title: 'Sexta generación',
      description:
        'La sexta generación de videojuegos de Pokémon se desarrolló para la consola Nintendo 3DS. Introdujo la región de Kalos y el concepto de las Megaevoluciones. Los videojuegos que conforman esta generación son:',
      games: [
        { image: 'assets/videogames/x.jpg', name: 'pokemon x', special: false },
        { image: 'assets/videogames/y.jpg', name: 'pokemon y', special: false },
        {
          image: 'assets/videogames/omega_ruby.jpeg',
          name: 'pokemon omega ruby',
          special: false,
        },
        {
          image: 'assets/videogames/alpha_sapphire.webp',
          name: 'pokemon alpha sapphire',
          special: false,
        },
      ],
    },
    {
      title: 'Séptima generación',
      description:
        'La séptima generación de videojuegos de Pokémon también se desarrolló para la consola Nintendo 3DS. Introdujo la región de Alola y los Pokémon de la región de Alola, que tenían formas regionales. Los videojuegos que conforman esta generación son:',
      games: [
        {
          image: 'assets/videogames/sol.jpeg',
          name: 'pokemon sol',
          special: false,
        },
        {
          image: 'assets/videogames/luna.jpeg',
          name: 'pokemon luna',
          special: false,
        },
        {
          image: 'assets/videogames/ultrasol.jpeg',
          name: 'pokemon ultrasol',
          special: false,
        },
        {
          image: 'assets/videogames/ultraluna.jpg',
          name: 'pokemon ultraluna',
          special: false,
        },
      ],
    },
    {
      title: 'Octava generación',
      description:
        'La octava generación de videojuegos de Pokémon se desarrolló para la consola Nintendo Switch. Introdujo la región de Galar y los Pokémon de la región de Galar, con la mecánica de las formas Gigantamax. Los videojuegos que conforman esta generación son:',
      games: [
        {
          image: 'assets/videogames/espada.jpeg',
          name: 'pokemon espada',
          special: true,
        },
        {
          image: 'assets/videogames/escudo.jpeg',
          name: 'pokemon escudo',
          special: true,
        },
      ],
    },
    {
      title: 'Novena generación',
      description:
        'La novena generación de videojuegos de Pokémon está programada para ser lanzada en el futuro. Actualmente no se dispone de información sobre los juegos que conformarán esta generación.',
      games: [
        {
          image: 'assets/videogames/escarlata.jpeg',
          name: 'pokemon escarlata',
          special: true,
        },
        {
          image: 'assets/videogames/purpura.jpeg',
          name: 'pokemon purpura',
          special: true,
        },
      ],
    },
  ];
}
