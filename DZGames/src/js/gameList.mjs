import PokemonData from "./DataFetch.mjs";
import { renderListWithTemplate } from "./utils.mjs";

export default class PokemonList {
  constructor(url, listElement, pokemonCardTemplate) {
    this.url = url;
    this.pokemonUrl = [];
    this.pokemonData = [];
    this.listElement = listElement;
    this.pokemonCardTemplate = pokemonCardTemplate;
  }

  async renderPokemonList() {
    for (const pokeUrl of this.pokemonUrl) {
      let dataSource = new PokemonData(pokeUrl.url);
      let data = await dataSource.getData();
      this.pokemonData.push(data);
    }
    // Now that all data is fetched, render the list
    renderListWithTemplate(this.pokemonCardTemplate, this.listElement, this.pokemonData);
  }

  async init() {
    let dataSource = new PokemonData(this.url);
    let data = await dataSource.getData();
    this.pokemonUrl = data.results
    this.renderPokemonList()
  }
}
