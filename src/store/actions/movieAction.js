import { createAction } from ".";
import { actionTypes, authTypes } from "./type";
import { movieApi } from "./../../api/movieApi";
import { BookTicket } from "../../model/bookTicket";
import { userApi } from "../../api/userApi";

export const getMovieById = (id) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_MOVIE_REQUEST, {}));
    const { data } = await movieApi.getMovieById(id);
    dispatch(createAction(actionTypes.FETCH_MOVIE_SUCCESS, data.content));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_MOVIE_FAIL, err));
  }
};

export const getShowtimeById = (id) => async (dispatch) => {
  try {
    dispatch(createAction(actionTypes.FETCH_SHOWTIME_REQUEST, {}));
    const { data } = await movieApi.getShowtimeByMovieId(id);
    dispatch(createAction(actionTypes.FETCH_SHOWTIME_SUCCESS, data.content));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_SHOWTIME_FAIL, err));
  }
};

export const postBookTicket = bookTicket => async dispatch => {
  console.log(bookTicket)
    const token = localStorage.getItem('token');
    try {
      dispatch(createAction(actionTypes.POST_BOOK_TICKET_REQUEST, {}));
      const { data } = await movieApi.postBookTicket(bookTicket, token);
      dispatch(createAction(actionTypes.POST_BOOK_TICKET_SUCCESS, data.content));

      dispatch(createAction(authTypes.REFRESH_TOKEN_REQUEST, {}));
      const res = await userApi.refreshToken(token);
      dispatch(createAction(authTypes.REFRESH_TOKEN_SUCCESS, res.data.content));
    } catch (err) {
      dispatch(createAction(actionTypes.POST_BOOK_TICKET_FAIL, err));
    }
  };
