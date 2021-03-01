import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/mainPage/MainPage';
import AuthForm from './pages/authForm/authForm';
import IdPage from './pages/idPage/IdPage';



const Routes = isAuthenticated => {

  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/mainPage" component={MainPage} exact/>
          <Route path="/albums/:id" component={IdPage} />
          <Redirect to="/mainPage" />
        </Switch>
      </ >
    )
  }

  return (
    <Switch>
      <Route exact path="/" component={AuthForm} />
      <Redirect to="/" />
    </Switch>
  );
};


export default Routes;

