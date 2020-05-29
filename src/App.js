import React from 'react';
import Header from './components/Header';
import Searchbox from './components/Searchbox';
import Footer from './components/Footer';
import {getcontacts} from './helper/index';
import Contacts from './components/Contacts';
import './App.css';
import 'tachyons';

class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			contacts : [],
			searchfield : ''
		}
	}

	componentDidMount() {
		getcontacts().then(data => {
			this.setState({contacts : data});
		})
	}

	onSearchChange = (event) =>{
		this.setState({searchfield : event.target.value});
	}
	

	render() {
		const {contacts, searchfield} = this.state;

		const filteredContacts = contacts.filter(contact => {
			return contact.name.toLowerCase().includes(searchfield.toLowerCase()) ||
					contact.email.toLowerCase().includes(searchfield.toLowerCase()) ||
					contact.phoneNumber.toString().includes(searchfield);
		});

		return(
			<div>
				<Header/>
				<Searchbox searchChange = {this.onSearchChange}/>
				<Contacts contacts = {filteredContacts}/>
				<Footer/>
			</div>
		);
	}
}

export default App;
