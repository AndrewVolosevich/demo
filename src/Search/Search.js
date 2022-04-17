import React from 'react';

const Search = (props) => {

    const {handleSearchChange, term} = props;

    return (
        <input value={term} onChange={(e) => {
            handleSearchChange(e.target.value)
        }} />
    );
};

export default Search;