import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accent from './pages/accent/Accent';
import AuthForm from './pages/authForm/authForm';
import IdPage from './pages/idPage/IdPage';



const Routes = (isAuthenticated) => {

  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Accent} />
          <Route exact path="/auth" component={AuthForm} />
          <Route path="/accent" component={Accent} />
          <Route path="/withId/:id" component={IdPage} />
          <Redirect to="/" />
        </Switch>
      </>
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

