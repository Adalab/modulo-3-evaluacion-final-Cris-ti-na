import React from 'react';

const CharacterCard = props => {
    return (
        <article className="card">
            <img src={props.imgUrl} className="card__img" alt={props.name} />
            {props.name}
            {props.specie}
        </article>
    )
}


export default CharacterCard;