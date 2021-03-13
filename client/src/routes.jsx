import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthForm from './pages/authForm/AuthForm';
import AlbumInfo from './pages/albumInfo/AlbumInfo';
import FavoriteAlbumInfo from './pages/favoriteAlbumInfo/FavoriteAlbumInfo';
import AlbumsList from './pages/albums/AlbumsList';



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
              <AlbumInfo {...props} />
            )}
          />

          <Route path="/favorites" exact
            render={props => (
              <AlbumsList {...props} isFavorite={true} />
            )}
          />

          <Route path="/favorites/:id"
            render={props => (
              <FavoriteAlbumInfo {...props} />
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

