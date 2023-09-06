// import React from "react";
// import { getMovies, getTVs } from "../api/tmdb-api"; // GET TV series 
// import PageTemplate from '../components/templateMovieListPage'; // duplicate for TV series list
// import { useQuery } from 'react-query';
// import Spinner from '../components/spinner';
// import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

// const TVSeriesPage = (props) => {

//   const {  data, error, isLoading, isError }  = useQuery('discover', getMovies)

//   if (isLoading) {
//     return <Spinner />
//   }

//   if (isError) {
//     return <h1>{error.message}</h1>
//   }  
//   const movies = data.results;

// //   Redundant, but necessary to avoid app crashing.
//   const favourites = movies.filter(m => m.favourite)
//   localStorage.setItem('favourites', JSON.stringify(favourites))

//   return (
//       <PageTemplate
//         title="Discover TV series"
//         movies={movies}
//         action={(movie) => {
//           return <AddToFavouritesIcon movie={movie} />
//         }}
//       />
//   );
// };

// export default TVSeriesPage;