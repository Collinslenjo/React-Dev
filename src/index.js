import React from 'react';
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAszJ4eMXvQ2njWyKHzCnkeX9gTlVG4B-Y';

// Create a New Component. This Component Should produse
//some HTML
const App = () => {
	return (
	<div>
		<SearchBar />
	</div>
	);
}

//Take this Component's html and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));