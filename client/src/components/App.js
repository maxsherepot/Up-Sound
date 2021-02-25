import React, { useEffect } from 'react';
import Routes from '../routes';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { onLoginSuccess } from '../store/auth/actions';


const App = props => {

	useEffect(() => {
		const userData = JSON.parse(localStorage.getItem("userData"));
		if (userData) {
			props.setData(userData)
		}
	}, [])


	const isAuthenticated = !!props.token;
	const routes = Routes(isAuthenticated);


	return (
		<>
			{routes}
		</>
	);
};


const mapStateToProps = state => ({
	token: state.auth.token
});


const mapDispatchToProps = dispatch => ({
	setData: (userData) => dispatch(onLoginSuccess(userData))
});


export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(App)
);

