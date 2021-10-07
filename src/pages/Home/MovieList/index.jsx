import React, { useEffect, useState } from "react";
import MovieItem from "../../../components/MovieItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../../../store/actions/movie";
import { Grid, Container } from "@material-ui/core";

const MovieList = () => {
  const fetchMovieList = useSelector((state) => state.movieList);

  const dispatch = useDispatch();
  // console.log(fetchMovieList.movieList.content);

  useEffect(() => {
    //
    dispatch(fetchMovies());
  }, []);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {fetchMovieList?.movieList?.content?.map((movies) => {
          return (
            <Grid key={movies.maPhim} item xs={12} sm={6} md={3}>
              <MovieItem movies={movies}></MovieItem>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default MovieList;
