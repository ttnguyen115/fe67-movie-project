import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import SeatRow from "../../components/SeatRow";
import { splitSeatArray } from "../../helpers/splitSeatArray";
import { getShowtimeById } from "../../store/actions/movie";
import "./css/style.css";

const TicketRoom = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { selectedMovie, loading } = useSelector((state) => state.movieList);
    const [seatArray, setSeatArray] = useState([]);

    useEffect(() => {
        dispatch(getShowtimeById(id));
    }, [dispatch, id]);

    useEffect(() => {
        if (!!selectedMovie?.danhSachGhe) {
            setSeatArray(splitSeatArray(selectedMovie.danhSachGhe));
        }
    }, [selectedMovie]);

    if (loading) return <div>Loading...</div>

    return (
        <div className="ticketroom">
            <Grid container>
                <Grid item xs={12} md={6}>
                    {!!seatArray &&
                        seatArray.map((seats, index) => (
                            <SeatRow key={index} seatPerRow={seats} />
                        ))}
                </Grid>
                <Grid item xs={12} md={6}></Grid>
            </Grid>
        </div>
    );
};

export default TicketRoom;
