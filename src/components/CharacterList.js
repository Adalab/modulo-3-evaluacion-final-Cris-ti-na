import React from 'react';
import CharacterCard from './CharacterCard';
import errorGif from '../images/errorGif2.gif';

const CharacterList = props => {
    const errorInfo = (
        <div className="error">
            <h1 className="errorText">
            404 Character Not Found
            </h1>
            <img src={errorGif} alt="Error gif" />
        </div>
    );

    const htmlCode = props.characters.map((character)=> {
        //console.log(character);
        return <CharacterCard
            key={character.id}
            name={character.name}
            imgUrl={character.image}
            specie={character.species} />;
    });
    return  <div>
                {htmlCode.length ? <section className="cards">{htmlCode}</section> : <div>{errorInfo}</div>}
            </div>;
};

export default CharacterList;