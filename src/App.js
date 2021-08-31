import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterContainer from './CharacterContainer';

function App() {

  const dispatch = useDispatch()

  const characters = useSelector(state => state.characters)
  console.log(characters)

  useEffect(getCharacters, [])

  function getCharacters() { 
    fetch("https://rickandmortyapi.com/api/character")
      .then(response => response.json())
      .then(({results}) => dispatch(
        {
          type: "SET_CHARACTERS",
          characters: results
        }
      ))
  }
  return (
    <div className="App">
      <CharacterContainer characters={characters} />
    </div>
  );
}

export default App;
