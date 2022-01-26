import React from 'react';

function TodoSearch({ searchValue, setSearchValue, loading }){
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }
    
    return (
        <input 
            className="TodoSearch"
            placeholder="cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
        />
    );
}

export { TodoSearch };