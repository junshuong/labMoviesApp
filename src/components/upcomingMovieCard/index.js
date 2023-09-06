import React, { useContext  } from "react";
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import img from '../../images/film-poster-placeholder.png'
import { MoviesContext } from "../../contexts/moviesContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";

export default function UpcomingMovieCard({ movie, action }) {

  const { watchlists } = useContext(MoviesContext);
    
    if (watchlists.find((id) => id === movie.id)) {
      movie.watchlist = true;
    } else {
      movie.watchlist = false
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader avatar={
            movie.watchlist ? (
                <Avatar sx={{ backgroundColor: 'red' }}>
                    <PlaylistAddIcon />
                </Avatar>
            ) : null
            }
            title={
            <Typography variant="h5" component="p">
                {movie.title}{" "}
            </Typography>
            } />
        <CardMedia
            sx={{ height: 500 }}
            image={
            movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : img
            }
        />
        <CardContent>
            <Grid container>
            <Grid item xs={6}>
                <Typography variant="h6" component="p">
                <CalendarIcon fontSize="small" />
                {movie.release_date}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h6" component="p">
                <StarRateIcon fontSize="small" />
                {"  "} {movie.vote_average}{" "}
                </Typography>
            </Grid>
            </Grid>
        </CardContent>
        <CardActions disableSpacing>
            {action(movie)}
            <Link to={`/movies/${movie.id}`}>
            <Button variant="outlined" size="medium" color="primary">
                More Info ...
            </Button>
            </Link>
        </CardActions>
        </Card>
    );
}