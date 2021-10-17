import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "../../store/actions";
import { actionTypes } from "../../store/actions/type";
import "./index.scss";
import "./style.css";
const SeatRow = ({ seatPerRow }) => {
  const { bookingTicket } = useSelector((state) => state.movieList);
  const dispatch = useDispatch();

  const handleSeat = () => {
    return seatPerRow.map((seatItem, index) => {
      let styleSelected = "";
      const foundIndex = bookingTicket.findIndex(
        (seat) => seat.maGhe === seatItem.maGhe
      );
      if (foundIndex !== -1) {
        styleSelected = "seat-btn-selected";
      }
      return (
        <Fragment key={index}>
          {seatItem.daDat ? (
            <button className={`seat-btn seat-btn-disabled disable bg-red-400`}>
              {seatItem.tenGhe}
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch(createAction(actionTypes.BOOKING_TICKET, seatItem))
              }
              className={`seat-btn seat-btn-active ${styleSelected} ${
                seatItem.loaiGhe === "Vip" ? "bg-yellow-600" : "bg-gray-500"
              } `}
              key={seatItem.maGhe}
            >
              {seatItem.tenGhe}
            </button>
          )}
        </Fragment>
      );
    });
  };

  return (
    <div className="seat row" spacing={1}>
      {handleSeat()}
    </div>
  );
};

export default SeatRow;
