// call api
import axios from "axios";
import { actionTypes } from "./type";
import { createAction } from ".";
import { movieApi } from "../../api/movieApi";

export const fetchMovies = () => async dispatch => {
  try {
    dispatch(createAction(actionTypes.FETCH_MOVIES_REQUEST, {}));
    const { data } = await movieApi.getAll();
    dispatch(createAction(actionTypes.FETCH_MOVIES_SUCCESS, data.content));
  } catch (err) {
    dispatch(createAction(actionTypes.FETCH_MOVIES_SUCCESS, err));
  }
};
