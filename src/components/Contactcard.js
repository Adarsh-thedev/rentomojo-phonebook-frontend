import React,{useState} from 'react';

const Contactcard = (props) => {
    const {name, email, phoneNumber} = props;
    const [state, setState] = useState({
        showEditForm : false
    });

    const handleClick = () => {
        setState({
            ...state,
            showEditForm : !state.showEditForm
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Working');
    }

    const editForm = () => {
        return state.showEditForm && (
            <div className = 'col col-6 offset-3 bg-transparent br-pill'>
                <form>
                    <input type = 'text' placeholder = 'Name'
                        className = 'pa2 input-reset ba br-pill mt1 hover-bg-black hover-white w-100'
                    />
                    <input type = 'text' placeholder = 'Email'
                        className = 'pa2 input-reset ba br-pill mt1 hover-bg-black hover-white w-100'
                    />
                    <input type = 'text' placeholder = 'Phone'
                        className = 'pa2 input-reset ba br-pill mt1 hover-bg-black hover-white w-100'
                    />
                    <button 
                        className = 'btn btn-block mt1 dim shadow-2 bg-red white br-pill tc center'
                        onClick = {onSubmit}
                    >Make Changes</button>
                </form>
            </div>
        );
    }

    return(
        <div className = 'container mt2'>
            <div className = 'row'>
                <div className = 'col-sm-10 offset-sm-1 bg1 text-center br-pill shadow-3'>
                    <p className = 'f5'>Name : {name}</p>
                    <span className = 'f4 red'>&#9993;</span><p className = 'f5 dib pr2'>Email : {email}</p>
                    <span className = 'f4 red'>&#9742;</span><p className = 'f5 dib'>Phone : {phoneNumber}</p>
                    <button 
                        onClick = {handleClick}
                        title = 'Edit Contact' 
                        className= 'ml5 bn bg1 dim f3 pointer red'
                    >&#9998;</button>
                </div>
            </div>
            <div className = 'row' id = 'editForm'>
                {editForm()}
            </div>
        </div>
    );
}

export default Contactcard;