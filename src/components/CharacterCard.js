import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = props => {
    return (
        <article className="card">
            <Link to={`/details/${props.name}`} className="link">
                <img src={props.imgUrl} className="card__img" alt={props.name} />
                <div className="card__textcontainer">
                    <h3 className="card__title">{props.name}</h3>
                    <p className="card__specie">{props.specie}</p>
                </div>
            </Link>
        </article>
    );
};

export default CharacterCard;