import React, { useEffect } from 'react';
import Loader from "../../components/loader/Loader"
import ErrorMessage from "../../components/errorMessage/ErrorMessage"
import AlbumCard from '../../components/albums/AlbumCard';
import { connect } from "react-redux";
import { getAlbumsRequest } from "../../store/albums/actions";



const MainPage = props => {
  //const { getAlbums, loading, error, albums } = props;
  const { getAlbums, loading, error } = props;

  // useEffect(() => {
  //   getAlbums()
  // }, []);
  const albums = [
    { "_id": "603cd0dadc393230795ce530", "image": "https://lh3.googleusercontent.com/PSIZ9cf9hpESZwcSz2ylS5I-zIREqCSagxV-X4CJqefrE0sRCktRtFw-a7PlkLygmg7k1nZREKCaSzY=w544-h544-l90-rj", "title": "ASTROWORLD", "author": "Travis Scott", "year": "2018", "duration": "58 minutes", "tracks": "17", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_lQBWLW8abzmKVTapMPyyDj2kRaC65qMjA", "spotify_link": "https://open.spotify.com/album/41GuZcammIkupMPKH2OJ6I" }, { "_id": "603cd576dc393230795ce531", "image": "https://lh3.googleusercontent.com/qHQY41UFyGG9QyXfvF-ipQI7b4H9KYMpB5X20ORN4sXreA-Sec5TlYePmecVidzOH9aDTsTD5zctNKy3ww=w544-h544-s-l90-rj", "title": " LONG.LIVE.A$AP", "author": "A$AP Rocky", "year": "2013", "duration": "1 hour 9 minutes", "tracks": "17", "youTubeMusic_link": "https://music.youtube.com/channel/MPREb_tB0V6a2wbvu", "spotify_link": "https://open.spotify.com/album/6rzMufuu8sLkIizM4q9c7J" }, { "_id": "603cdabedc393230795ce532", "image": "https://lh3.googleusercontent.com/P5oSSF7f99_9mmLdxZaLaviljzqWhoDTBfvES9KtY6RUik6H68LyNAiPQm5KFIZLqlImMV4BdVJude6xNA=w544-h544-l90-rj", "title": "Nectar", "author": "Joji", "year": "2020", "duration": "53 minutes", "tracks": "18", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_nvELB-nk0pksDsADpeZHbD-oZ0hgWaHXk", "spotify_link": "https://open.spotify.com/album/5EzDhyNZuO7kuaABHwbBKX" }, { "_id": "603cdce3dc393230795ce533", "image": "https://lh3.googleusercontent.com/q9PlJBo2rRf1ZGDfDBYQ0UIGtgbw9yAjmLHf-27UwlUntAZc73MkcgTtbyNHtcuCW8uC8B2e3C1UHyA=w544-h544-l90-rj", "title": "Crazy Beautiful Blackout", "author": "Darci", "year": "2019", "duration": "20 minutes", "tracks": "7", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_mTU0BvSEKgLvBnn5NHO9SKzHEU44qCc34", "spotify_link": "https://open.spotify.com/album/6yxEmIaZbe7XvMtYP1jSJl" }, { "_id": "603d0ff3dc393230795ce534", "image": "https://lh3.googleusercontent.com/yZx38Snf0OLI2Rz7eokI-cuFElBraztLBmztUAlQweeTIlrYns2MygO74BRxZU0DC2mwn0koUnWA1ybL=w544-h544-l90-rj", "title": "From a Lonely Place", "author": "BRENNAN SAVAGE", "year": "2020", "duration": "11 minutes", "tracks": "4", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_m1ycGK1dyUHmbeCNJX4Ud8jG--d3qitaw", "spotify_link": "https://open.spotify.com/album/4Ct2001ctzz8BW8miEivv5" }, { "_id": "6046b5b2aa6edbf0ee0d6f9a", "image": "https://lh3.googleusercontent.com/aodlOL-8_2mc7oDlq0gvkPWLgeO8t-HvyuIaXgyITHSyTL2J3XRuENTcaZ7EVzb_AJKAXo1jrx1N0X8Y=w544-h544-l90-rj", "title": " Asking Alexandria", "author": " Asking Alexandria", "year": "2017", "duration": "47 minutes", "tracks": "13", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_lVnX-CvEHWybLpgVGtk9yRkjJFXXHFH4Y", "spotify_link": "https://open.spotify.com/album/0dYHTESEegNj0dkIFGWy2d" }, { "_id": "6046b6b2aa6edbf0ee0d6f9b", "image": "https://lh3.googleusercontent.com/g8g0VH_6UKxlXXkK8rNkxqJFJVgxlegkrKRcjd7BuMlCMgyLUFDiv7cdjqsUbXq490OrKCWvlAIciJU=w544-h544-l90-rj", "title": "Trench", "author": "Twenty One Pilots", "year": "2018", "duration": "56 minutes", "tracks": "14", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_l1ES29SnsvyUpQ-w3bYFtVzHLa97g8vKM", "spotify_link": "https://open.spotify.com/album/621cXqrTSSJi1WqDMSLmbL" }, { "_id": "6046b81daa6edbf0ee0d6f9c", "image": "https://lh3.googleusercontent.com/5-B7Ef4n0H-i6Y62lg6HRAYpGOoB8Fl4P3R6Q-vkOvs2r1wTQFNNitV2FKrXP9dy5PEvQ4yHMXknGJno=w544-h544-l90-rj", "title": "BINGE", "author": "Machine Gun Kelly", "year": "2018", "duration": "24 minutes", "tracks": "9", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_lJ_UB5ICwimnc6cPFOsiR4pOyHjWw-wAI", "spotify_link": "https://open.spotify.com/album/5YuscmEJSgkwWzBafTBKse" }, { "_id": "6046b930aa6edbf0ee0d6f9d", "image": "https://lh3.googleusercontent.com/2Jp-JvJgRNQro1PWNBFFGLF4wvBCLWUXIdCBAfJYJGMujzTLK8-UvMbOQHerqhm-YWi67Le8T-FPrZvM=w544-h544-l90-rj", "title": " SOLACE", "author": "Rüfüs Du Sol", "year": "2018", "duration": "42 minutes", "tracks": "9", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_nEKcxuuJ1GjwP_Cw8N1pZ2LNKYGexU36Q", "spotify_link": "https://open.spotify.com/album/5Jazpq8mEgSgQs06mdwkQd" }, { "_id": "6046b9a5aa6edbf0ee0d6f9e", "image": "https://lh3.googleusercontent.com/rosINUJAFnfRXMAXXzFtbHFfbTPSgs5QPtRKjdgPJZy-wH-aOiGsR2ETw4kszngUVy8mlcAb1ki9MGo_9A=w544-h544-l90-rj", "title": " Wrong Time", "author": "Hippie Sabotage", "year": "2020", "duration": "2 minutes", "tracks": "1", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_nANb5LIDNDTTwutfRq5ugAuhxEi8QXdEo", "spotify_link": "https://open.spotify.com/album/3a6or8qwEaFtPZFhEWVOTQ" }, { "_id": "6046ba5eaa6edbf0ee0d6f9f", "image": "https://lh3.googleusercontent.com/wZEz7VDs6ZtqFJnFZIBqkTPR2S94q_jKcVULU1w_DGovctK-IqKUXjjAaITKJmD_o49thBngYNZOQOYb=w544-h544-l90-rj", "title": " Summer In The Winter", "author": "Kid Ink", "year": "2015", "duration": "37 minutes", "tracks": "11", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_lzUEGgMrgY1goIG_2P9YgQwGwDJ-MGwNI", "spotify_link": "https://open.spotify.com/album/6uG9BscYmPnAbtl6Cy9u91" }, { "_id": "6046bc19aa6edbf0ee0d6fa0", "image": "https://lh3.googleusercontent.com/ZvI16nhXv-hEPRUKlltxG5yDlPSt6PA2lnhx4P9wxABr9jQNuiIyrLE2oE9wo0DigoKgvchWgoaNrJhP=w544-h544-l90-rj", "title": " Perfection Is a Lie", "author": "The Hardkiss ", "year": "2017", "duration": "43 minutes", "tracks": "12", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_nrD9Syv3aZeJ4hlyJYCSKWlFrlzyp2iYU", "spotify_link": "https://open.spotify.com/album/5PPedWreFLdXCSahizLXSl" }, { "_id": "6046bc96aa6edbf0ee0d6fa1", "image": "https://lh3.googleusercontent.com/sFLw67SJiOBH3FmSUpz2d22XI6JrRvM8bXHZj1xQ_yZsjYKKEV6ySHXzyDDdsZJfHDB9UlVXSk-QOHKd=w544-h544-l90-rj", "title": "That's The Spirit", "author": "Bring Me the Horizon", "year": "2015", "duration": "45 minutes", "tracks": "11", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_mU6PumUpEGDE7akp4INX1RMghPFzJpV8s", "spotify_link": "https://open.spotify.com/album/7FqHuAvmREiIwVXVpZ9ooP" }, { "_id": "6046bd2daa6edbf0ee0d6fa2", "image": "https://lh3.googleusercontent.com/12_e0Wize5zIQHL2lipxAfpqa1T_GdYGUUZxK6WUY2jCxdSnQyOMBZ0vZPt29kHItuMvyMeUtrcoIdUf=w544-h544-l90-rj", "title": " THE NIGHTDAY", "author": "ZHU", "year": "2014", "duration": "25 minutes", "tracks": "6", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_mkSLpDf0lGKnCyPCTWgOIE0o6cJNIkObA", "spotify_link": "https://open.spotify.com/album/75iYmhihZaJXZ0LmA7JGum" }, { "_id": "6046bdc7aa6edbf0ee0d6fa3", "image": "https://lh3.googleusercontent.com/57A2jLYJ6P6iSbuMrjNeV6N5CsjyBaMVwBBGRFiDFSzAdfglDQatdl0c5OZ-h4F1ord-IiAJfwekLxITrQ=w544-h544-l90-rj", "title": "Dua Lipa (Deluxe)", "author": "Dua Lipa", "year": "2017", "duration": "1 hour", "tracks": "17", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_lcO9niZkVWp1fsBhYRlaCwi0nTSX-t2oM", "spotify_link": "https://open.spotify.com/album/01sfgrNbnnPUEyz6GZYlt9" }, { "_id": "6046bedbaa6edbf0ee0d6fa4", "image": "https://lh3.googleusercontent.com/cu6oflEO0dWiKg9OuNfZhBc1TMn8gQu_Nlq2q6eu7spY12vHdOikOXQ0gN69LIKxXOY8d7cghcvFq1s=w544-h544-l90-rj", "title": " The Two of Us Are Dying", "author": "Killstation ", "year": "2019", "duration": "48 minutes", "tracks": "22", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_mrus4RTGI0LzPH01pCXLARpfuCvHDmXXk", "spotify_link": "https://open.spotify.com/album/6vEqNDFYyv3rakykPzpYwu" }, { "_id": "6046bf62aa6edbf0ee0d6fa5", "image": "https://lh3.googleusercontent.com/cMucCwczfPYh-2u6JsI2_BFf_iB94vkBfmwR8JQ8yBUwCrSYgIo3CVX-17Ut_r9Ze7tDba8GjSdCRKI=w544-h544-l90-rj", "title": " XXXXX", "author": "Space of Variations", "year": "2020", "duration": "20 minutes", "tracks": "6", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_kIHAAnEL7mmwdwrviv1sdv-opf-V_ncT0", "spotify_link": "https://open.spotify.com/album/7zFSYRCTDe9XhLzgFZcDif" }, { "_id": "6046bff0aa6edbf0ee0d6fa6", "image": "https://lh3.googleusercontent.com/IZOpR3ZTkFumlxA06NDwxglFhHFgqGY0Deo6ctblIS6vdkALOXQ_e_5aigQSpFFIj0OGJbF6qpNDXCdo=w544-h544-l90-rj", "title": "  GOODNIGHT LOVELL", "author": "Night Lovell", "year": "2019", "duration": "45 minutes", "tracks": "18", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_mZWyMHIYoNoenC8eCVVywpLEYH5EECsiw", "spotify_link": "https://open.spotify.com/album/7DNZURhi8nhcGxhoRriZFS" }, { "_id": "6046c093aa6edbf0ee0d6fa7", "image": "https://lh3.googleusercontent.com/YoQ-A-GOpgeE8tgdF3Rcf5z9V8NIIKjLH6_7X3QphIQUwVHioLu7Ik2wQzU0oCkyNm1TeLDLDYvomJ8=w544-h544-l90-rj", "title": " Hollywood's Bleeding", "author": "Post Malone", "year": "2019", "duration": "51 minutes", "tracks": "17", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_kYxUi9rrFA8P2QynC0JzqI9azGOJhtveo", "spotify_link": "https://open.spotify.com/album/4g1ZRSobMefqF6nelkgibi?highlight=spotify:track:7sWRlDoTDX8geTR8zzr2vt" }, { "_id": "6046c0eeaa6edbf0ee0d6fa8", "image": "https://lh3.googleusercontent.com/XMZY1r0v7hNDGv1XcLvLJM8GB-oZ9OQcDyZisalkVVttlEFPFnb7ixcsCV4Vm3jn1ZR1p6MJm_UaGzWS=w544-h544-l90-rj", "title": "  Ghetto Cowboy", "author": "Yelawolf", "year": "2019", "duration": "50 minutes", "tracks": "14", "youTubeMusic_link": "https://music.youtube.com/playlist?list=OLAK5uy_mmGz99dwputXl2c_lZB44FuW6s44mLKlE", "spotify_link": "https://open.spotify.com/album/2dTnaecImWLJOMrJgF5HAt" }
  ]


  return (
    <div className="container">

      {loading || !albums ?
        <Loader />
        :
        error ?
          <ErrorMessage />
          :
          !albums.length
            ?
            <h3 className="text-light text-center">No albums yet</h3>
            :
            <div className="row mt-5 ">
              {albums &&
                albums.map(item => {
                  return (
                      <AlbumCard
                        key={item._id}
                        item={item}
                        albumIsFavorite={false} />
                  )
                })
              }
            </div>
      }
    </div>
  );
};


const mapStateToProps = state => ({
  albums: state.albums.albums,
  loading: state.albums.loading,
  error: state.albums.error,
});


const mapDispatchToProps = dispatch => ({
  getAlbums: () => dispatch(getAlbumsRequest())
})


export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
