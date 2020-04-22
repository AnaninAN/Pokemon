export default class DummyPokeApiService {

  _pokemon = [
    {
      id: 1,
      name: 'Pilachu [TEST DATA]',
      type: 1,
      weight: 10,
      height: 100
    },

    {
      id: 2,
      name: 'Raichu [TEST DATA]',
      type: 2,
      weight: 20,
      height: 200
    }
  ];

  _ability = [
    {
      id: 1,
      name: 'Stench [TEST DATA]',
      shortEffect: 'Has a 10% chance ...',
      effect: 'This Pokémons damaging moves ...'
    },

    {
      id: 2,
      name: 'Drizzle [TEST DATA]',
      shortEffect: 'Summons rain that ...',
      effect: 'The weather changes to rain when this Pokémon enters battle ...'
    }
  ];

  getAllPokemon = async () => {
    return {
      itemList: this._pokemon,
      pageSize: 2,
      totalItemCount: 2
    };
  };

  getPokemon = async () => {
    return this._pokemon[0];
  };

  getPokemonImage = () => {
    return `https://placeimg.com/400/500/people`
  };

  getAllAbility = async () => {
    return {
      itemList: this._ability,
      pageSize: 2,
      totalItemCount: 2
    };
  };

  getAbility = async () => {
    return this._ability[0];
  };

  getAbilityImage = () => {
    return `https://placeimg.com/400/500/people`
  };
}