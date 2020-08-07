import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = props => {
    return (
        <div className="modal">
            <div className="modal__dialog">
                <div className="modal__content">
                    <header className="modal__header">
                        <h2 className="modal__title">Character: {props.name}</h2>
                        <Link to="/">
                            <span className="modal__close icon fas fa-times"></span>
                        </Link>
                    </header>
                    <section>
                        <img className="card__img" src={props.imageUrl} alt={props.name} />
                        <ul className="ml-1 mt-1">
                            <li>Specie: {props.specie}</li>
                            <li>Origin: {props.origin}</li>
                            <li>Episodes: {props.episode.length}</li>
                            <li>Status : {props.status}</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail;