import { Tabs, Tab } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShowtimePicker from "../ShowtimePicker";
import TheaterItem from "../TheaterItem";
import "./css/style.css";

const TheaterList = () => {
    const { selectedMovie, loading } = useSelector((state) => state.movieList);
    const [value, setValue] = useState(0);
    const [dateValue, setDateValue] = useState(null);
    const [tabId, setTabId] = useState(0);
    const [theaterSystem, setTheaterSystem] = useState();

    useEffect(() => {
        if (!!selectedMovie) {
            setDateValue(
                moment(
                    selectedMovie?.heThongRapChieu[0]?.cumRapChieu[0]
                        ?.lichChieuPhim[0]?.ngayChieuGioChieu
                ).format("L")
            );
            setTheaterSystem(selectedMovie?.heThongRapChieu[0]?.cumRapChieu);
        }
    }, [selectedMovie]);

    const handleChangeTheaterSystem = (event, newValue) => {
        setValue(newValue);
        setTheaterSystem(selectedMovie?.heThongRapChieu[newValue]?.cumRapChieu);
    };

    const handleChangeTheaterTab = (event) => setTabId(event.target.id);
    const handleChangeDateValue = (dateValue) =>
        setDateValue(moment(dateValue).format("L"));

    if (loading) return <div>Loading...</div>;
    
    return (
        <>
            <Tabs
                value={value}
                onChange={handleChangeTheaterSystem}
                variant="scrollable"
                scrollButtons="auto"
            >
                {selectedMovie?.heThongRapChieu.map((theater, index) => (
                    <Tab
                        key={index}
                        label={theater.maHeThongRap}
                        onClick={handleChangeTheaterTab}
                        id={index}
                    />
                ))}
            </Tabs>

            <ShowtimePicker
                dateValue={dateValue}
                handleChangeDateValue={handleChangeDateValue}
            />

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
