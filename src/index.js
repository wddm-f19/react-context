import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from 'components/HelloWorld'
import 'css/reset.css';
import 'css/index.css';

// Create a Context "Store" to hold data globally 
// "NameStore" is just an example, this can be called anything
// The store will wrap around the "context" for which this data should live (below)
// Don't forget to import {createContext} from the React library
// The value passed to the function is the default "value" stored
// Also don't forget to export this variable at the bottom of the file for others to subscribe to
const NameStore = createContext('');

const App = () => {

	// Just some variable that we want to put into our Store
	// This can be any type, meaning multiple properties can be stored in an Object or Array
	const nameToStoreInContext = `Dolly`

	// Notice "AppContent" is used here
	// "value" takes the data object (or primitive) that we want in the store
	return (
		<NameStore.Provider value={nameToStoreInContext}>
			<HelloWorld />
    </NameStore.Provider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))

// Export the Store so others can use it
export {NameStore}
