import { createAction } from ".";
import { movieTypes } from "./type";
import { movieApi } from "./../../api/movieApi";

export const getMovieById = (id) => async (dispatch) => {
  try {
    dispatch(createAction(movieTypes.GET_MOVIE_REQUEST, {}));
    const { data } = await movieApi.getMovieById(id);
    dispatch(createAction(movieTypes.GET_MOVIE_SUCCESS, data.content));
  } catch (err) {
    dispatch(createAction(movieTypes.GET_MOVIE_FAIL, err));
  }
};

export const getShowtimeById = (id) => async (dispatch) => {
  try {
    dispatch(createAction(movieTypes.GET_SHOWTIME_REQUEST, {}));
    const { data } = await movieApi.getShowtimeByMovieId(id);
    dispatch(createAction(movieTypes.GET_SHOWTIME_SUCCESS, data.content));
  } catch (err) {
    dispatch(createAction(movieTypes.GET_SHOWTIME_FAIL, err));
  }
};
