import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = props => {
    return (
        <article className="card">
            <img src={props.imgUrl} className="card__img" alt={props.name} />
            <h3 className="card__title">{props.name}</h3>
            <p className="card__description">{props.specie}</p>
            <Link to={`/details/${props.name}`} className="card__btn">
                See more
            </Link>
        </article>
    );
};

export default CharacterCard;