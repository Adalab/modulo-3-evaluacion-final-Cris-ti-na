import React from 'react';
import { Link } from 'react-router-dom';
import human from '../images/Morty Human.png';
import alien from '../images/Morty Alien.png';
import dead from '../images/Morty Dead.png';

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
                                        <div>
                                            {props.status === 'Alive' ?
                                                <img src={props.specie === 'Human' ? human : alien } className="card__specie-icon" alt="{props.specie === 'Human' ? 'alive human' : 'alive alien'}" /> :
                                                <img src={dead} className="card__specie-icon" alt='dead' />
                                            }
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
                                        <span className="cardD__text-bold">
                                            Specie/Status:
                                        </span>
    <li>
        <span className="cardD__text-bold">
            Specie:
        </span>
        {` ${props.specie}`}
    </li>
*/

export default CharacterDetail;