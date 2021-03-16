import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import AuthForm from './pages/authForm/AuthForm';
import AlbumInfo from './pages/albumInfo/AlbumInfo';
import AlbumsList from './pages/albums/AlbumsList';
import About from './pages/about/About';



const Routes = isAuthenticated => {

  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/albums" exact
            render={props => (
              <AlbumsList {...props} isFavorite={false} />
            )}
          />

          <Route path="/albums/:id" 
            render={props => (
              <AlbumInfo {...props} isFavorite={false} />
            )}
          />

          <Route path="/favorites" exact
            render={props => (
              <AlbumsList {...props} isFavorite={true} />
            )}
          />

          <Route path="/favorites/:id" 
            render={props => (
              <AlbumInfo {...props} isFavorite={true} />
            )}
          />

          <Route path="/about" 
            render={props => (
              <About {...props} />
            )}
          />

          <Redirect to="/albums" />
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

