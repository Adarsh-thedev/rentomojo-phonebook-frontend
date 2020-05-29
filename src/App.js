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
			contacts : []
		}
	}

	componentDidMount() {
		getcontacts().then(data => {
			this.setState({contacts : data})
		})
	}

	render() {
		const {contacts} = this.state;

		return(
			<div>
				<Header/>
				<Searchbox/>
				<Contacts contacts = {contacts}/>
				<Footer/>
			</div>
		);
	}
}

export default App;
