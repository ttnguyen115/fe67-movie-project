import { Grid, Button } from "@mui/material";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import SeatRow from "../../components/SeatRow";
import { splitSeatArray } from "../../helpers/splitSeatArray";
import {
  getShowtimeById,
  postBookTicket,
} from "../../store/actions/movieAction";
import { BookTicket } from "../../model/bookTicket";

import "./style.scss";

const TicketRoom = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedMovie, loading, bookingTicket } = useSelector(
    (state) => state.movieList
  );
  const [seatArray, setSeatArray] = useState([]);

  useEffect(() => {
    dispatch(getShowtimeById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (!!selectedMovie?.danhSachGhe) {
      setSeatArray(splitSeatArray(selectedMovie.danhSachGhe));
    }
  }, [selectedMovie]);

  // console.log(bookingTicket);

  //
  if (loading) return <div>Loading...</div>;

  const { tenPhim, ngayChieu, gioChieu, tenCumRap, tenRap } =
    selectedMovie?.thongTinPhim || {};

  const handleSubmit = () => {
    //  lấy bookTicket từ movieAction
    const bookTicket = new BookTicket();
    bookTicket.maLichChieu = id;
    bookTicket.danhSachVe = bookingTicket;

    console.log(bookTicket);
    dispatch(postBookTicket(bookTicket));
  };

  return (
    <div className="ticketroom">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          {!!seatArray &&
            seatArray.map((seats, index) => (
              <SeatRow key={index} seatPerRow={seats} />
            ))}
        </div>

        <div className="col-span-4">
          <div className="ticketroom__left">
            <div className="ticketroom__left_infoSeat ">
              <div className="ticketroom__left_infoSeat-a bg-yellow-600"></div>
              <p className="yel">Ghế Vip</p>
            </div>

            <div className="ticketroom__left_infoSeat ">
              <div className="ticketroom__left_infoSeat-a bg-gray-500"></div>
              <p className="yel">Ghế chưa đặt</p>
            </div>

            <div className="ticketroom__left_infoSeat ">
              <div className="ticketroom__left_infoSeat-a bg-green-600"></div>
              <p className="yel">Ghế đang đặt</p>
            </div>

            <div className="ticketroom__left_infoSeat ">
              <div className="ticketroom__left_infoSeat-a bg-red-400"></div>
              <p className="yel">Ghế đã đặt</p>
            </div>

            <div className="ticketroom__left-title">{tenPhim}</div>
            <hr />
            <div className="ticketroom__left-times">
              <div>Ngày khởi chiếu: {ngayChieu} </div>
              <div>{gioChieu}</div>
            </div>
            <hr />
            <div className="ticketroom__left-cinema">
              <div>{tenCumRap}</div>
              <div>{tenRap}</div>
            </div>
            <hr />

            <div className="ticketroom__left-chair">
              {_.sortBy(bookingTicket, ["stt"]).map((seat, index) => {
                return (
                  <table
                    className="table-auto ticketroom__left-chair-table"
                    key={index}
                  >
                    <thead>
                      <tr>
                        <td>Ghế số: {seat.tenGhe}</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{seat.giaVe}đ</td>
                      </tr>
                    </tbody>
                  </table>
                );
              })}
            </div>
            <hr />
            <div className="ticketroom__left-total">
              <div>Tổng tiền:</div>
              <div>
                {bookingTicket
                  .reduce((total, seat) => {
                    return (total += seat.giaVe);
                  }, 0)
                  .toLocaleString()}
                đ
              </div>
            </div>
            <hr />
            <div className="ticketroom__left-btn">
              <Button onClick={handleSubmit} variant="contained">
                BOOKING TICKET
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketRoom;
