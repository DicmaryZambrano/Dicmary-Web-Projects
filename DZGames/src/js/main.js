import PokemonList from "./PokemonList.mjs";

const pokemonCardFunc = function (pokemon) {
  return ` 
  <div class="pokemon-card">
    <a href="pokemon_details/index.html?pokemon=${pokemon.name}">
      <img
        src=${pokemon.sprites.front_default}
        alt=${pokemon.name}
      />
      <h3 class="pokemon-card__name">${pokemon.name}</h3>
    </a>
  </div>
  `;
};

const pokemonList = new PokemonList(
  "http://pokeapi.co/api/v2/pokemon/?limit=100",
  "#characters",
  pokemonCardFunc,
);
pokemonList.init();
