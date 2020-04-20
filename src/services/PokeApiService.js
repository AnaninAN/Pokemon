export class PokeApiService {

  _apiBase = 'https://pokeapi.co/api/v2';
  _pageSize = 10;

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Error ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getAllItem = async (currentPage, url) => {
    const offset = currentPage * this._pageSize - this._pageSize;
    const res = await this.getResource(`${url}?offset=${offset}&limit=${this._pageSize}`);
    const itemList = res.results.map(this._transformAllItem);
    const totalItemCount = res.count;
    return {
      itemList,
      pageSize: this._pageSize,
      totalItemCount,
    }
  };

  getAllPokemon = (currentPage) => {
    return this.getAllItem(currentPage, '/pokemon/');
  };

  getPokemon = async (id) => {
    const pokemon = await this.getResource(`/pokemon/${id}/`);
    return this._transformPokemon(pokemon);
  };

  getAllAbility = (currentPage) => {
    return this.getAllItem(currentPage, '/ability/');
  };

  getAbility = async (id) => {
    const ability = await this.getResource(`/ability/${id}/`);
    return this._transformAbility(ability);
  };

  getPokemonImage = ({id}) => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  };

  getAbilityImage = ({id}) => {
    return null;
  };

  _ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformAllItem = (item) => {
    const id = this._extractId(item);
    return {
      id,
      name: this._ucFirst(item.name),
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

  _transformAbility = (ability) => {
    return {
      id: ability.id,
      name: this._ucFirst(ability.name),
      shortEffect: ability.effect_entries[0].short_effect,
      effect: ability.effect_entries[0].effect,
    };
  };
}