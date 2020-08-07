import React from 'react';

const CharacterDetail = props => {
    return (
        <div className="modal">
            <div className="modal__dialog">
                <div className="modal__content">
                    <header className="modal__header">
                        <h2 className="modal__title">Personaje: {props.name}</h2>
                        <a href="/">
                            <span className=""></span>
                        </a>
                    </header>
                    <section>
                        <img className="card__img" src={props.imageUrl} alt={props.name} />
                        <ul className="ml-1 mt-1">
                            <li>Especie: {props.specie}</li>
                            <li>Origen: {props.origin}</li>
                            <li>Episodios: {props.episode.length}</li>
                            <li>Estado: {props.status}</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail;