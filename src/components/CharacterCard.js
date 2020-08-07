import React from 'react';

const CharacterCard = props => {
    return (
        <article className="card">
            <img src={props.imgUrl} className="card__img" alt={props.name} />
            <h1>{props.name}</h1>
            <p>{props.specie}</p>
        </article>
    )
}


export default CharacterCard;