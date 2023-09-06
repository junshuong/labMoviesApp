import React, { useState } from "react";

export const MoviesContext = React.createContext(null);
const MoviesContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )
  const [favourites, setFavourites] = useState( [] )
  const [watchlists, setWatchList] = useState( [] )
  
  const addToFavourites = (movie) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      newFavourites.push(movie.id);
    }
    setFavourites(newFavourites);
  };
  
  // We will use this function in a later section
  const removeFromFavourites = (movie) => {
    setFavourites( favourites.filter(
      (mId) => mId !== movie.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  // array to store IDs to be added to MoviesContext
  const addToWatchList = (movie) => {
    let newWatchList = [...watchlists];
    if (!watchlists.includes(movie.id)) {
      newWatchList.push(movie.id)
    }
    setWatchList(newWatchList);
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        addToWatchList
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;