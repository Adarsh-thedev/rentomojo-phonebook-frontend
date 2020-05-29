import React from 'react';

const Searchbox = ({searchChange}) => {
    
    return(
        <div className = 'col-sm-12 col-md-8 offset-md-2 mt2 text-center'>
            <input 
                className = 'pa3 tc ba b--transparent bg-washed-blue br-pill shadow-3'
                type = 'search'
                onChange = {searchChange}
                placeholder = 'Search Contacts'
            />
        </div>
    );
}

export default Searchbox;