import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = props => {
    const htmlCode = props.characters.map((character, index )=> {
        console.log(character.name);
        return <CharacterCard key={character.id} name={character.name} imgUrl={character.image} specie={character.species} />;
    });
    return <section className="cards">{htmlCode}</section>;
};

export default CharacterList;