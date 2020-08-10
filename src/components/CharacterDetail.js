import React from 'react';
import { Link } from 'react-router-dom';
import human from '../images/Morty Human.png';
import alien from '../images/Morty Alien.png';
import dead from '../images/Morty Dead.png';

const aliveoptions = props => {return (props.specie === 'Human' ? human : alien)};

const CharacterDetail = props => {
    const handleModalContentClick = ev => {
        ev.preventDefault();
    };
    return (
        <div className="modal">
            <div className="modal__dialog">
                <div className="modal__content" onClick={handleModalContentClick}>
                    <header className="modal__header">
                        <h2 className="modal__title">{props.name}</h2>
                        <Link to="/">
                            <span className="modal__close icon fas fa-times">x</span>
                        </Link>
                    </header>
                    <section className="cardDetail">
                        <div className="card cardD">
                            <img className="card__img cardD__img" src={props.imageUrl} alt={props.name} />
                            <div className="card__textcontainer">
                                <ul className="card__specie cardD__text">
                                    <li>
                                        <span className="cardD__text-bold">
                                            Origin:
                                        </span>
                                        {` ${props.origin}`}
                                    </li>
                                    <li>
                                        <span className="cardD__text-bold">
                                            Episodes:
                                        </span>
                                        {` ${props.episode.length}`}
                                    </li>
                                    <li>
                                        <span className="cardD__text-bold">
                                            Specie/Status:
                                        </span>
                                        <div>
                                            <img src={props.status === 'Alive' ? aliveoptions : dead } className="card__specie-icon" alt="{props.specie === 'Alive' ? 'Alive' : 'Dead'}" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
};

/*
    <li>
        <span className="cardD__text-bold">
            Specie:
        </span>
        {` ${props.specie}`}
    </li>
*/

export default CharacterDetail;