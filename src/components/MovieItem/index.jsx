import React, { Fragment } from "react";
import "./index.scss";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const MovieItem = (movie) => {
  const { hinhAnh, tenPhim, moTa, maPhim } = movie.movies;
  return (
    <div>
      <Link to={`/movie/${maPhim}`}>
      {/* <div className=" movie-home-item">
        <a
          className="movie_links social portfolio"
          href="https://www.rafaelalucas.com"
          target="_blank"
        >
          <span className="movie-home-icon" />
        </a>
        <a
          className="movie_links social dribbble"
          href="https://dribbble.com/rafaelalucas"
          target="_blank"
        >
          <span className="movie-home-icon" />
        </a>
        <a
          className="movie_links social linkedin"
          href="https://www.linkedin.com/in/rafaelalucas/"
          target="_blank"
        >
          <span className="movie-home-icon" />
        </a>
        <a className="movie_links logo" />
      </div> */}
      {/* end about */}
      <div className="movie-content">
        {/* card */}
        <div className="movie-home-card">
          <img className="movie-home-img" src={hinhAnh} alt="" />
        </div>
        {/* end card */}
      </div>
      <h4 className="text-white movie-home-title">{tenPhim}</h4>
      <p className="text-gray-100 movie-home-text">{moTa.substr(0, 40) + ".."}</p>
      </Link>
    </div>
  );
};

export default MovieItem;
