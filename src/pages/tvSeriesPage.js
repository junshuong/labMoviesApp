import React from "react";
import { getTVs } from "../api/tmdb-api"; // add getUpcoming API hook
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToWatchListIcon from '../components/cardIcons/addToWatchList'

const TVPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('tv', getTVs)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvs = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchlists = tvs.filter(t => t.watchlist)
  localStorage.setItem('watchlists', JSON.stringify(watchlists))
  
  return (
    <PageTemplate
      title="TV Series"
      tvs={tvs}
      action={(tv) => {
        return <AddToWatchListIcon tv={tv}/>
      }}
    />
);
};

export default TVPage;