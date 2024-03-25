import PokemonData from "./DataFetch.mjs";
import { renderCardWithTemplate } from "./utils.mjs";

export default class PokemonDetails {
  constructor(pokemonName, listElement, pokemonCardTemplate) {
    this.pokemonName = pokemonName;
    this.pokemonData = [];
    this.listElement = listElement;
    this.pokemonCardTemplate = pokemonCardTemplate;
  }

  renderPokemon() {
    renderCardWithTemplate(this.pokemonCardTemplate, this.listElement, this.pokemonData);
  }

  async init() {
    let url = `https://pokeapi.co/api/v2/pokemon/${this.pokemonName}/`;
    let dataSource = new PokemonData(url);
    this.pokemonData = await dataSource.getData();
    this.renderPokemon()
  }
}
