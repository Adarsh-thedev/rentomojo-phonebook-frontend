import React, {useState} from 'react';

const Footer = () => {
    const [state, setState] = useState({
        showPostForm : false,
        name : '',
        email : '',
        phoneNumber : '',
        error : false,
        success : false
    });

    const {showPostForm, name, email, phoneNumber, error, success} = state;

    const handleClick = () => {
        setState({
            ...state,
            showPostForm : !showPostForm
        })
    }

    const handleChange = name => event => {
        setState({
            ...state,
            [name] : event.target.value
        });
    }

    const onAddContactSubmit = (event) => {
        event.preventDefault();
        setState({...state,})
        fetch('http://localhost:8000/api/contact', {
            method: 'POST',
            headers : {
                Accept : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({name, email, phoneNumber})
        })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
        .then(data=> {
            if(data.error) {
                setState({...state, error : data.error})
            } else{
                setState({
                    ...state,
                    name : '',
                    email : '',
                    phoneNumber : '',
                    showPostForm : false,
                    success : true,
                    error : false
                })
            }
        })
        .catch(err => console.log(err));
    }

    const addContactForm = () => {
        return showPostForm && (
            <div className = 'col col-6 offset-3 bg-transparent br-pill'>
                <form>
                    <input type = 'text' placeholder = 'Name'
                        onChange = {handleChange('name')}
                        value = {name}
                        className = 'pa2 input-reset ba br-pill mt1 hover-bg-black hover-white w-100'
                    />
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
                        className = 'btn b btn-block mt1 dim shadow-2 bg-red white br-pill tc center'
                        onClick = {onAddContactSubmit}
                    >Add to Contacts</button>
                </form>
            </div>
        );
    }

    const errorMessage = () => {
        return error && (
            <div className="col-md-6 offset-sm-3 text-left">
                <div 
                    className = 'alert alert-danger'
                    style = {{display : error ? '' : 'none'}}
                >
                    {error}
                </div>
            </div>
        );
    }

    const successMessgage = () => {
        return success && (
            <div className="col-md-6 offset-sm-3 text-left">
                <div 
                    className = 'alert alert-success'
                    style = {{display : success ? '' : 'none'}}
                >
                    Contact Saved Successfully...
                </div>
            </div>
        );
    }

    return(
        <div className = 'container mt2'>
            <div className = 'row'>
                <div className = 'col-sm-10 f4 pa3 text-center br-2'>
                    <button 
                        title = 'Add Contact'
                        onClick = {handleClick}
                        className = 'btn f3 b bg-red col-2 white grow offset-sm-10 br-pill'
                    >+</button>
                </div>
            </div>
            <div className = 'row' id = 'postForm'>
                {errorMessage()}
                {successMessgage()}
                {addContactForm()}
            </div>
        </div>
    );
}

export default Footer;