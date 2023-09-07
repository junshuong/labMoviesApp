import { useEffect, useState } from "react";
import {getTVs} from '../api/tmdb-api'

const useTV = id => {
  const [tv, setTV] = useState(null);
  useEffect(() => {
    getTVs(id).then(tv => {
      setTV(tv);
    });
  }, [id]);
  return [tv, setTV];
};

export default useTV;