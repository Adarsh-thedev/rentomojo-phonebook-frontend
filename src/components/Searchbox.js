import React from 'react';

const Searchbox = ({searchChange}) => {
    
    return(
        <div className = 'col-sm-12 col-md-8 offset-md-2 mt2 text-center'>
            <input 
                className = 'pa3 tc ba bn bg-washed-blue br2 hover-bg-black hover-white shadow-3'
                type = 'search'
                onChange = {searchChange}
                placeholder = 'Search Contacts'
            />
        </div>
    );
}

export default Searchbox;