import { actionTypes } from "./type";
import { createAction } from ".";
import { movieApi } from "../../api/movieApi";

export const getMovieById = id => async dispatch => {
    try {
        dispatch(createAction(actionTypes.FETCH_MOVIE_REQUEST, {}));
        const { data } = await movieApi.getMovieById(id);
        dispatch(createAction(actionTypes.FETCH_MOVIE_SUCCESS, data.content));
    } catch (err) {
        dispatch(createAction(actionTypes.FETCH_MOVIE_FAIL, err));
    }
}

export const getShowtimeById = id => async dispatch => {
    try {
        dispatch(createAction(actionTypes.FETCH_SHOWTIME_REQUEST, {}));
        const { data } = await movieApi.getShowtimeByMovieId(id);
        dispatch(createAction(actionTypes.FETCH_SHOWTIME_SUCCESS, data.content));
    } catch (err) {
        dispatch(createAction(actionTypes.FETCH_SHOWTIME_FAIL, err));
    }
}

export const fetchMovies = () => async dispatch => {
  try {
    dispatch(createAction(actionTypes.FETCH_MOVIES_REQUEST, {}));
    const { data } = await movieApi.getAll();
    dispatch(createAction(actionTypes.FETCH_MOVIES_SUCCESS, data.content));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_MOVIES_SUCCESS, err));
  }
};
