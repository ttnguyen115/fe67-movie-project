import { Button, Grid } from "@mui/material";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import VideoTrailer from "../../components/VideoTrailer";
import { getMovieById } from "../../store/actions/movieAction";
import { PlayIcon } from "./../../assets/detailIcon";
import "./css/style.css";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedMovie, loading } = useSelector(
        (state) => state.movieReducer
    );

    useEffect(() => {
        dispatch(getMovieById(id));
    }, [dispatch, id]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="detail">
            <div
                className="detail__bg"
                style={{ backgroundImage: `url(${selectedMovie?.hinhAnh})` }}
            ></div>

            <div className="detail__container">
                <div className="article">
                    <Grid container>
                        <Grid item xs={12}>
                            <a
                                href={selectedMovie?.trailer}
                                target="_blank"
                                className="trailerBtn"
                                rel="noreferrer"
                            >
                                <PlayIcon />
                                Trailer
                            </a>

                            <div className="article__content">
                                <h2>{selectedMovie?.tenPhim}</h2>
                                <ul className="list">
                                    <li>Rating: {selectedMovie?.danhGia}</li>
                                    <li>
                                        {selectedMovie?.dangChieu
                                            ? "Now Showing"
                                            : selectedMovie?.sapChieu
                                            ? "Coming Soon"
                                            : undefined}
                                    </li>
                                    <li>
                                        {moment(
                                            selectedMovie?.ngayKhoiChieu
                                        ).format("MMM Do YYYY")}
                                    </li>
                                </ul>
                                <p>{selectedMovie?.moTa}</p>
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <VideoTrailer src={selectedMovie?.trailer} />
                        </Grid>
                    </Grid>
                </div>

                <Link
                    to={`/ticketroom/${selectedMovie?.maPhim}`}
                    className="order__btn"
                >
                    <Button type="button">
                        Order
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Detail;
