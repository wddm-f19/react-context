import React, {useContext} from 'react';
import {AppContext} from 'App';
// "App" was defined in webpack.config.js as an alias for "src/index.js" (where the Store was created)


const HelloWorld = () => {

	// useContext is a React "hook" that will access a defined Context "store"
	// The "value" is returned
	// Note, if the value was an Object, typical object notation would apply
	// Don't forget to import {useContext} from the React library
	let name = useContext(AppContext);
	
	// Notice no props were used to pass the information for "name"
	// This means any component can import from this (or any) store!
	return (
		<>
			<h1>Hello, {name}!</h1>
		</>
	)
}

export default HelloWorld;
