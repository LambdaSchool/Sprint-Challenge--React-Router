// React
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Data
import navData from './nav-data';

// Components
import NavWrapper from './components/NavWrapper';
import ContentSection from './components/ContentSection';
import MainSection from './components/MainSection';

// Styles
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Route path = '/' render = { props => <NavWrapper {...props} navData = { navData } /> } />
				<Route exact path = '/' component = { MainSection } />
				<Route path = '/:mainCat/:subCat' render = { props => <ContentSection {...props} /> } />
			</div>
		);
	}
}

export default App;
