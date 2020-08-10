import React from 'react';
import { Link } from 'react-router-dom';


const CharacterCard = props => {
    return (
        <article className="card">
            <Link to={`/details/${props.name}`} className="link">
                <img src={props.imgUrl} className="card__img" alt={props.name} />
                <div className="card__textcontainer">
                    <h3 className="card__title">{props.name}</h3>
                    <div className="card__specie">
                    <span className="cardD__text-bold">
                        Specie:
                    </span>
                    {` ${props.specie}`}
                    </div>
                </div>
            </Link>
        </article>
    );
};

/*
<img src={props.specie === 'Human' ? human : alien } className="card__specie-icon" alt="{props.specie === 'Human' ? 'human img' : 'alien img'}" />
*/

export default CharacterCard;