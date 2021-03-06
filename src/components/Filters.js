import React from 'react';

const Filters = (props) => {
    const handlefilterName = (ev) => {
        props.handleFilters({
            key: 'filterName',
            value: ev.target.value
        });
    };
    const handlefilterSpecie = (ev) => {
        props.handleFilters({
            key: 'filterSpecie',
            value: ev.target.value
        });
    };
    const handleSubmit = (ev) => {
        ev.preventDefault ();
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__container">
                <label htmlFor="filterName" className="form__label">
                    Filter by name
                </label>
                <input
                    type="text"
                    className="form__input"
                    id="filterName"
                    value={props.filterName}
                    onChange={handlefilterName}
                    placeholder="Alien Morty"
                />
            </div>
            <div className="form__container">
                <label htmlFor="filterSpecie" className="form__label">
                    Filter by specie
                </label>
                <select
                    name="specie"
                    id="filterSpecie"
                    value={props.filterSpecie}
                    className="form__input"
                    onChange={handlefilterSpecie}
                >
                    <option value="All" defaultValue>All</option>
                    <option value="Alien">Alien</option>
                    <option value="Human">Human</option>
                </select>
            </div>
        </form>
    )
}

export default Filters;