import './App.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PokeApiService from 'services/PokeApiService';
import DummyPokeApiService from 'services/DummyPokeApiService';
import { PokeApiServiceProvider } from 'components/PokeApiServiceContext';

import Header from 'components/Header';
import RandomPokemon from 'components/RandomPokemon';
import { PokemonPage, AbilityPage } from 'pages';
import ErrorBoundry from 'components/ErrorBoundry';

import routes from 'src/routes';

export default class App extends Component {

  state = {
    pokeApiService: new PokeApiService(),
  };

  onChangeApi = () => {
    this.setState(({ pokeApiService }) => {
      const Service = pokeApiService instanceof PokeApiService ?
                      DummyPokeApiService : PokeApiService;

      return {
        pokeApiService: new Service(),
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <PokeApiServiceProvider value={this.state.pokeApiService}>
          <Router>
            <div className="app-pokemon">

              <Header onChangeApi={this.onChangeApi} />
              <RandomPokemon />
                <Switch>
                  {routes.map((route, idx) => <Route key={idx} {...route} />)}
                </Switch>

            </div>
          </Router>
        </PokeApiServiceProvider>
      </ErrorBoundry>
    );
  }
}