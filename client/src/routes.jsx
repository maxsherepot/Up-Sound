import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/mainPage/MainPage';
import AuthForm from './pages/authForm/authForm';
import IdPage from './pages/idPage/IdPage';
import FavoritesPage from './pages/favorites/FavoritesPage';
import FavoritesInfo from './pages/favoritesInfo/FavoritesInfo';



const Routes = isAuthenticated => {

  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/mainPage" component={MainPage} exact />
          <Route path="/albums/:id" component={IdPage} />
          <Route path="/favorites" component={FavoritesPage} exact />
          <Route path="/favorites/:id" component={FavoritesInfo} />
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

