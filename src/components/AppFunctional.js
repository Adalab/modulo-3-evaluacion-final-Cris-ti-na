import React, {useEffect, useState} from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import getApiData from '../services/api';
import logo from '../images/rmlogo.png';
import errorGif from '../images/errorGif.gif';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [filterSpecie, setFilterSpecie] = useState('All');

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

  //FILTERS
  const handleFilters = (data) => {
    //console.log(data);
    if (data.key === 'filterName') {
      setFilterName(data.value);
    } else if (data.key === 'filterSpecie') {
      setFilterSpecie(data.value);
    }
  };

  //RENDER
  const renderCharacterDetail = (props) => {
    const routeCharacterName = props.match.params.characterName;
    const character = characters.find(
      character => character.name === routeCharacterName);

    if(character === undefined) {
      return (
        <div>
          <p>error</p>
          {errorInfo}
        </div>
      );
    } else {
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
        if (filterSpecie === 'All') {
          return true;
        } else {
          return character.species === filterSpecie;
        }
      });
  }

  //ERROR
  const errorInfo = (
    <div className="error">
      <h1 className="errorText">
        404 Character Not Found
      </h1>

      <img src={errorGif} alt="Error gif" />

      <h1 className="errorText back__btn">
          <Link to="/">
            <span>HOME</span>
          </Link>{' '}
      </h1>
    </div>
  )

  //RENDER
  return (
    <div>
      <header>
        <div className="App-header">
          <img src={logo} className="App-logo" alt='Rick and Morty logo' />
        </div>
      </header>
      <Switch>
        <Route exact path="/">
          <main>
            <Filters
              filterName={filterName}
              filterSpecie={filterSpecie}
              handleFilters={handleFilters}
            />
            <CharacterList
              characters={renderFilteredCharacters()}
              errorInfo={errorInfo} />
            </main>
        </Route>
        <Route exact path="/details/:characterName" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;