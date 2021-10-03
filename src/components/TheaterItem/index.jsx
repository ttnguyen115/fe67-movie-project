import { Grid, Typography } from "@material-ui/core";
import moment from "moment";
import React from "react";
import TheaterShowtime from "../TheaterShowtime";

const TheaterItem = ({ value, theaterSystem, index, dateValue }) => {
    const filterShowTime = (showtimeList) => {
        const firstShowDay = dateValue;
        const filteredDateArr = showtimeList.filter(
            (showingDay) =>
                moment(showingDay.ngayChieuGioChieu).format("L") ===
                    firstShowDay && showingDay
        );
        return filteredDateArr.length > 0 ? filteredDateArr : null;
    };

    return (
        <div
            value={value}
            index={0}
            role="tabpanel"
            hidden={value !== index}
            id={index}
        >
            {theaterSystem?.map((theater) => (
                <div key={theater.maCumRap}>
                    {
                        Boolean(filterShowTime(theater.lichChieuPhim))
                            ? (
                                <>
                                    <Typography>{theater.tenCumRap}</Typography>
                                    <Grid container>
                                        <Grid item xs={3}>
                                            <img src={theater.hinhAnh} alt="" />
                                        </Grid>
                                        <Grid item xs={9}>
                                            <TheaterShowtime
                                                showTime={filterShowTime(
                                                    theater.lichChieuPhim
                                                )}
                                                key={index}
                                            />
                                        </Grid>
                                    </Grid>
                                </>
                            )
                            : null
                    }
                </div>
            ))}
        </div>
    );
};

export default TheaterItem;
