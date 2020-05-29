import React from 'react';

const Contactcard = (props) => {
    const {name, email, phoneNumber} = props;

    return(
        <div className = 'container mt2'>
            <div className = 'row'>
                <div className = 'col-sm-10 offset-sm-1 bg1 text-center br-pill shadow-3'>
                    <p className = 'f5'>Name : {name}</p>
                    <span className = 'f4 red'>&#9993;</span><p className = 'f5 dib pr3'>Email : {email}</p>
                    <span className = 'f4 red'>&#9742;</span><p className = 'f5 dib'>Phone : {phoneNumber}</p>
                </div>
            </div>
        </div>
    );
}

export default Contactcard;