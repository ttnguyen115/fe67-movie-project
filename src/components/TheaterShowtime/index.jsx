import { Button } from "@material-ui/core";
import moment from "moment";
import React from "react";
import './css/style.css';

const TheaterShowtime = ({ showTime }) => {
    return (
        <>
            {
                showTime.map((item) => (
                    <Button
                        key={item.maLichChieu}
                        className="showtime__btn"
                        variant="outlined"
                    >
                        {moment(item.ngayChieuGioChieu).format("LT")}
                    </Button>
                ))
            }
        </>
    );
};

export default TheaterShowtime;
