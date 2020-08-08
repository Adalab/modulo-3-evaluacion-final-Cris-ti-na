import React, {useEffect, useState} from 'react';
import { Route, Switch} from 'react-router-dom';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
//import CharacterCard from './CharacterCard';
import getApiData from '../services/api';
import logo from '../images/rmlogo.png';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterSpecie, setFilterSpecie] = useState('');

  useEffect(() => {
      getApiData().then(data => {
        setCharacters(data);
      });
  }, []);

  const handleFilters = (data) => {
    console.log(data);
    if (data.key === 'filterName') {
      setFilterName(data.value);
    } else if (data.key === 'filterSpecie') {
      setFilterSpecie(data.value);
    }

  }

  const renderCharacterDetail = (props) => {
    //const character = characters[0];
    const routeCharacterName = props.match.params.characterName;
    const character = characters.find(character =>
      character.name === routeCharacterName);
    console.log(character);
    if (character) {
      return (
        <CharacterDetail
          key={character.id}
          imageUrl={character.image}
          name={character.name}
          specie={character.species}
          origin={character.origin.name}
          episode={character.episode}
          status={character.status}
        />
      );
    } else {
      return <p>Character not found</p>;
    }
  };

  const renderFilteredCharacters = () => {
    return characters.filter(character => {
      return character.name.includes(filterName);
    });
  }

  //render() {
    return (
      <div>

        <header>
          <div className="header__logo-container">
            <img src={logo} className="header__logo" alt='Rick and Morty logo' />
          </div>
        </header>

        <main className="App">
          <h1 className="title--big">Rick and Morty</h1>
          <Filters filterName={filterName} handleFilters={handleFilters} />
          <CharacterList characters={renderFilteredCharacters()} />
          <Switch>
            <Route path="/details/:characterName" render={renderCharacterDetail} />
          </Switch>
        </main>

      </div>
    );
  //}
};

export default App;