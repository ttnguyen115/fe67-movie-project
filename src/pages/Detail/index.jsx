import { Box, Grid } from "@mui/material";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TheaterList from "../../components/TheaterList";
import VideoTrailer from "../../components/VideoTrailer";
import { getMovieById } from "../../store/actions/movieAction";
import { PlayIcon } from "./../../assets/detailIcon";
import "./style.scss";
import Layout from '../../HOCs/Layout';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedMovie, loading } = useSelector(
        (state) => state.movieList
    );

    useEffect(() => {
        dispatch(getMovieById(id));
    }, [dispatch, id]);

    if (loading) return <div>Loading...</div>;

    return (
        <Layout>
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

                    <Box sx={{ borderBottom: 1, borderColor: "divider", marginTop: 2 }}>
                        <TheaterList />
                    </Box>
                </div>
            </div>
        </Layout>
    );
};

export default Detail;
