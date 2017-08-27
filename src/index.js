import React from 'react';
import ReactDOM from 'react-dom'

const API_KEY = 'SOME-RANDOM_NUMBER';

// make sure to run npm i -S youtube-api-search

// Create a New Component. This Component Should produse
//some HTML
const App = () => {
	return <div>Hi!</div>
}

//Take this Component's html and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));