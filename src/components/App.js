import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>SuperSquad</h2>
        <div>
          <CharacterList />
        </div>
        <div>
          <HeroList />
        </div>
        <div>
          <SquadStats />
        </div>
      </div>
    )
  }
}

export default App;