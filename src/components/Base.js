import React from 'react';
import Searchbox from './Searchbox';

const Base = ({
    className = 'col-sm-12 col-md-8 offset-md-2 f3 mt2',
    children
}) => {

    return(
        <div className = 'container mt2'>
            <div className = 'row'>
                <div className = 'col-sm-12 col-md-8 offset-md-2 bg-red white pa3 text-center br-pill shadow-3'>
                    <h2 className = 'f2'>RentoMojo Contacts</h2>
                </div>
                <Searchbox/>
                <div className = {className}>
                    {children}
                </div>
            </div>
            <div className = 'row'>
            <div className = 'col-sm-12 f4 col-md-8 offset-md-2 bg-red white pa3 text-center br-pill shadow-3'>
                Footer
            </div>
            </div>
        </div>
    );
}

export default Base;