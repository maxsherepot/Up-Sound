import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthForm from './pages/authForm/AuthForm';
import AlbumInfo from './pages/albumInfo/AlbumInfo';
import FavoriteAlbumsPage from './pages/favoriteAlbums/FavoriteAlbumsPage';
import FavoriteAlbumInfo from './pages/favoriteAlbumInfo/FavoriteAlbumInfo';
import AlbumsPage from './pages/albums/AlbumsPage';



const Routes = isAuthenticated => {

  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path="/albums" component={AlbumsPage} exact />
          <Route path="/albums/:id" component={AlbumInfo} />
          <Route path="/favorites" component={FavoriteAlbumsPage} exact />
          <Route path="/favorites/:id" component={FavoriteAlbumInfo} />
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

