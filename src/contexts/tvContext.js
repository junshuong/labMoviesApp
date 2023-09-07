import React, { useState } from "react";
export const TVContext = React.createContext(null);
const TVContextProvider = (props) => {
  const [myReviews, setMyReviews] = useState( {} )
  const [favourites, setFavourites] = useState( [] )
  const [watchlists, setWatchList] = useState( [] )
  
  const addToFavourites = (tv) => {
    let newFavourites = [...favourites];
    if (!favourites.includes(tv.id)) {
      newFavourites.push(tv.id);
    }
    setFavourites(newFavourites);
  };
  
  // We will use this function in a later section
  const removeFromFavourites = (tv) => {
    setFavourites( favourites.filter(
      (tId) => tId !== tv.id
    ) )
  };

  const addReview = (movie, review) => {
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  return (
    <TVContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
      }}
    >
      {props.children}
    </TVContext.Provider>
  );
};

export default TVContextProvider;