import React from 'react';

const Footer = () => {
    return(
        <div className = 'container mt2'>
            <div className = 'row'>
                <div className = 'col-sm-10 f4 pa3 text-center br-2'>
                    <button 
                        title = 'Add Contact'
                        
                        className = 'btn f3 b bg-red col-2 white grow offset-sm-10 br-pill'
                    >+</button>
                </div>
            </div>
        </div>
    );
}

export default Footer;