import React, {useEffect, useState} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import getApiData from '../services/api';
import logo from '../images/rmlogo.png';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterSpecie, setFilterSpecie] = useState('all');

  useEffect(() => {
      getApiData().then(data => {
        setCharacters(data);
      });
  }, []);

  //LOLCALSTORAGE
  useEffect(() => {
    localStorage.setItem('filterName', JSON.stringify(filterName));
  }, [filterName]);

  //ORDER
  const sortedCharacters = () => {
    characters.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }

  const handleFilters = (data) => {
    //console.log(data);
    if (data.key === 'filterName') {
      setFilterName(data.value);
    } else if (data.key === 'filterSpecie') {
      setFilterSpecie(data.value);
    }
  };

  const renderCharacterDetail = (props) => {
    const routeCharacterName = props.match.params.characterName;
    const character = characters.find(
      character => character.name === routeCharacterName);

      //const character = characters[0];
      //console.log(character);

    if(character) {
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
      return (
        <div>
          {errorInfo}
        </div>
      );
    }
  }

  const renderFilteredCharacters = () => {
    sortedCharacters();
    return characters
      .filter(character => {
        const name = character.name.toLowerCase();
        return name.includes(filterName.toLocaleLowerCase());
      })
      .filter(character => {
        if (filterSpecie === 'all') {
          return true;
        } else {
          return character.species === filterSpecie;
        }
      });
  }

  //ERROR
  const errorInfo = (
    <div>
      <h4 className="errorText">
        Character not found with <span className="errorText_word">"{filterName}"</span>
        Go back to
          <Link to="/">
            <span>main page</span>
          </Link>{' '}
      </h4>
      <div></div>
    </div>
  )

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
        <Filters
          filterName={filterName}
          filterSpecie={filterSpecie}
          handleFilters={handleFilters}
        />
        <CharacterList
          characters={renderFilteredCharacters()}
          errorInfo={errorInfo} />
        <Switch>
          <Route path="/details/:characterName" render={renderCharacterDetail} />
        </Switch>
      </main>

    </div>
  );
  //}
};

export default App;