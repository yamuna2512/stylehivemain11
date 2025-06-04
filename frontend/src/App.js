// import logo from './logo.svg';

import './App.css';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './Router';


function App() {
	return (
		<BrowserRouter>
		  {/* <Router path="/" element={<HomePage />} /> */}
			<Router />
		</BrowserRouter>
	);
}

export default App;