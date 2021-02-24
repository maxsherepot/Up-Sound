import React from 'react';
import Routes from '../routes';
import store from '../store/store.js';
import { Provider } from 'react-redux';


const App = () => {
	const routes = Routes(false);

	return (
		<Provider store={store}>
			{routes}
		</Provider>
	);
};


export default App;
