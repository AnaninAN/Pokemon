export class PokeApiService {

  _apiBase = 'https://pokeapi.co/api/v2';
  _pageSize = 5;

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Error ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPokemon = async (currentPage) => {
    const offset = currentPage * this._pageSize - this._pageSize;

    const res = await this.getResource(`/pokemon/?offset=${offset}&limit=${this._pageSize}`);

    const pokemonList = res.results.map(this._transformAllPokemon);
    const totalPokemonCount = res.count;

    return {
      pokemonList,
      pageSize: this._pageSize,
      totalPokemonCount,
    };
  };

  getPokemon = async (id) => {
    const pokemon = await this.getResource(`/pokemon/${id}/`);
    return this._transformPokemon(pokemon);
  };

  getAllAbility = async () => {
    const res = await this.getResource(`/ability/`);
    return res;
  };

  getAbility = (id) => {
    return this.getResource(`/ability/${id}/`);
  };

  getAllPokemonForm = async () => {
    const res = await this.getResource(`/pokemon-form/`);
    return res;
  };

  getPokemonForm = (id) => {
    return this.getResource(`/pokemon-form/${id}/`);
  };

  getAllPokemonType = async () => {
    const res = await this.getResource(`/type/`);
    return res;
  };

  getPokemonType = (id) => {
    return this.getResource(`/type/${id}/`);
  };

  _ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformAllPokemon = (pokemon) => {
    const id = this._extractId(pokemon);

    return {
      id,
      name: this._ucFirst(pokemon.name),
    };
  };

  _transformPokemon = (pokemon) => {
    return {
      id: pokemon.id,
      name: this._ucFirst(pokemon.name),
      type: pokemon.types[0].type.name,
      weight: pokemon.weight,
      height: pokemon.height,
    };
  };
}