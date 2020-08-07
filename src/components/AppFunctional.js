import React, {useEffect, useState} from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import CharacterCard from './CharacterDetail';
import getApiData from '../services/api';
import logo from '../images/rmlogo.png';

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
        />,
        <CharacterCard
          id={character.id}
          imageUrl={character.image}
          name={character.name}
          specie={character.species}
          origin={character.origin.name}
          episode={character.episode}
          status={character.status}
        />
      );
    }
  };

  //render() {
    return (
      <div>
        <img src={logo} className="title--logo" alt='Rick and Morty logo' />
        <h1 className="title--big">Rick and Morty</h1>
        <Filters />
        <CharacterList characters={characters} />
        {renderCharacterDetail()}
      </div>
    );
  //}
};

export default App;