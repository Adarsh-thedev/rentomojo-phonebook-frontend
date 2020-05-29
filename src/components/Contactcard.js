import React,{useState} from 'react';
//import {editcontact} from '../helper/index';

const Contactcard = (props) => {
    const {id} = props;
    const [state, setState] = useState({
        showEditForm : false,
        email : '',
        phoneNumber : ''
    });

    const {showEditForm, email, phoneNumber} = state;

    const handleClick = () => {
        setState({
            ...state,
            showEditForm : !showEditForm
        })
    }

    const handleChange = name => event => {
        setState({
            ...state,
            [name] : event.target.value
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setState({...state});
        fetch(`http://localhost:8000/api/contact/${id}`, {
            method : 'PUT',
            headers : {
                Accept : 'application/json',
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({email, phoneNumber})
        })
        .then(response => {
            return response.json();
        })
        .then(data => {
            if(data.error) {
                return console.log(data.error);
            }
        })
        .catch(err => console.log(err));
    }

    const editForm = () => {
        return showEditForm && (
            <div className = 'col col-6 offset-3 bg-transparent br-pill'>
                <form>
                    <input type = 'text' placeholder = 'Email'
                        onChange = {handleChange('email')}
                        value = {email}
                        className = 'pa2 input-reset ba br-pill mt1 hover-bg-black hover-white w-100'
                    />
                    <input type = 'text' placeholder = 'Phone'
                        onChange = {handleChange('phoneNumber')}
                        value = {phoneNumber}
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
                    <p className = 'f5'>Name : {props.name}</p>
                    <span className = 'f4 red'>&#9993;</span><p className = 'f5 dib pr2'>Email : {props.email}</p>
                    <span className = 'f4 red'>&#9742;</span><p className = 'f5 dib'>Phone : {props.phoneNumber}</p>
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