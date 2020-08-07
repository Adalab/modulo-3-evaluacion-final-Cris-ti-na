import React, {useEffect, useState} from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import getApiData from '../services/api';


const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
      getApiData().then(data => {
        setCharacters(data);
      });
  }, []);

  const renderCharacterDetail = () => {
    const character = characters[1];
    console.log(character);
    if (character) {
      return (
        <CharacterDetail
          id={character.id}
          imageUrl={character.image}
          name={character.name}
          specie={character.species}
        />
      );
    }
  };

  //render() {
    return (
      <div>
        <h1 className="titile--big">Rick and Morty</h1>
        <Filters />
        <CharacterList characters={characters} />
        {renderCharacterDetail()}
      </div>
    );
  //}
};


export default App;