import PokemonDetails from "./PokemonDetails.mjs";
import { getParam } from "./utils.mjs";

const pokeDetailsCardFunc = function (pokemon) {
  return ` 
  <div class="pokemon-card">
    <img
      src=${pokemon.sprites.front_default}
      alt=${pokemon.name}
    />
    <img
    src=${pokemon.sprites.back_default}
    alt=${pokemon.name}
    />
    <h3 class="pokemon-card__name">${pokemon.name}</h3>
    <h4 class="pokemon-card__type">${pokemon.types[0].type.name}</h4>
    <p>
      <span class="pokemon-card__weight">weight= ${pokemon.weight}</span>
      <span class="pokemon-card__moves">moves= ${pokemon.moves[0].move.name},${pokemon.moves[1].move.name},${pokemon.moves[2].move.name}</span>
    </p>
  </div>
  `;
};


const pokemonName = getParam("pokemon");

const pokemonDetails = new PokemonDetails(
  pokemonName,
  "#pokemon",
  pokeDetailsCardFunc,
);
pokemonDetails.init();