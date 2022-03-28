import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "../App.css";

const MovieList = (props) => {
  const { movies } = props;

  return (
    <div className="movielist">
      {movies.length === 0 && <Typography variant="h4">No results</Typography>}
      {movies.map((movie) => (
        <Card sx={{ maxWidth: 345 }} className="movieCard">
          {movie.image_url && (
            <CardMedia
              component="img"
              height="140"
              image={movie.image_url}
              alt="green iguana"
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.summary}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" href={movie.review_link} target="_blank">
              Review
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default MovieList;
