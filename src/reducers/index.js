import { combineReducers } from 'redux';
import characters_json from '../data/characters.json';
import characters from './characters_reducer';
import heroes from './heroes_reducer';



function createCharacter(id) {
  let character = characters_json.find(c => c.id === id);
  return character;
}

const rootReducer = combineReducers({
  characters,
  heroes
})

export default rootReducer;