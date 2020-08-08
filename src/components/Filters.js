
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
    return (
        <form className="border--medium m-0 mb-1 mt-1 col2">
            <div>
                <label htmlFor="filterName" className="form__label">
                    Filter by name
                </label>
                <input
                    type="text"
                    className="form__input-text"
                    id="filterName"
                    value={props.filterName}
                    onChange={handlefilterName}
                />
            </div>
            <div>
                <label htmlFor="filterSpecie" className="form__label">
                    Filter by specie
                </label>
                <select id="filterSpecie" className="form__input-text" onChange={handlefilterSpecie}>
                    <option value="Alien">Alien</option>
                    <option value="Animal">Animal</option>
                    <option value="Human">Human</option>
                    <option value="Humanoid">Humanoid</option>
                    <option value="Vampire">Vampire</option>
                </select>
            </div>
        </form>
    )
}

export default Filters;