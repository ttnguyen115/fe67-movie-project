import { Tabs, Tab } from "@mui/material";
import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ShowtimePicker from "../ShowtimePicker";
import TheaterItem from "../TheaterItem";
import "./css/style.css";

const TheaterList = () => {
    const { selectedMovie } = useSelector((state) => state.movieReducer);
    const [value, setValue] = useState(0);
    const [dateValue, setDateValue] = useState(
        moment(
            selectedMovie?.heThongRapChieu[0].cumRapChieu[0].lichChieuPhim[0]
                .ngayChieuGioChieu
        ).format("L")
    );
    const [tabId, setTabId] = useState(0);
    const [theaterSystem, setTheaterSystem] = useState(
        selectedMovie?.heThongRapChieu[0]?.cumRapChieu
    );

    const handleChangeTheaterSystem = (event, newValue) => {
        setValue(newValue);
        setTheaterSystem(selectedMovie?.heThongRapChieu[newValue]?.cumRapChieu);
    };

    const handleChangeTheaterTab = (event) => setTabId(event.target.id);
    const handleChangeDateValue = (dateValue) => setDateValue(moment(dateValue).format("L"));

    return (
        <>
            <Tabs
                value={value}
                onChange={handleChangeTheaterSystem}
                variant="scrollable"
                scrollButtons="auto"
            >
                {
                    selectedMovie?.heThongRapChieu.map((theater, index) => (
                        <Tab
                            key={index}
                            label={theater.maHeThongRap}
                            onClick={handleChangeTheaterTab}
                            id={index}
                        />
                    ))
                }
                <ShowtimePicker
                    dateValue={dateValue}
                    handleChangeDateValue={handleChangeDateValue}
                    className="date__picker"
                />
            </Tabs>

            <TheaterItem
                value={value}
                index={Number(tabId)}
                theaterSystem={theaterSystem}
                dateValue={dateValue}
            />
        </>
    );
};

export default TheaterList;
