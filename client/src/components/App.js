import React from 'react';
import Routes from '../routes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



const App = props => {
	const isAuthenticated = !!props.userData;
	const routes = Routes(isAuthenticated);


	return (
		<>
			{routes}
		</>
	);
};


const mapStateToProps = state => ({
	userData: state.auth.userData,
});



export default withRouter(connect(mapStateToProps)(App));


