export class PokeApiService {

  _apiBase = 'https://pokeapi.co/api/v2';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Error ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getAllPokemon = async () => {
    const res = await this.getResource(`/pokemon/`);
    return res;
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

  _transformPokemon(pokemon) {
    return {
      id: pokemon.id,
      name: pokemon.name,
      type: pokemon.types[0].type.name,
      weight: pokemon.weight,
      height: pokemon.height,
    };
  };
}