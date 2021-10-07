import { createAction } from "."
import { movieTypes } from "./type"
import { movieApi } from './../../api/movieApi';

export const getMovieById = id => async dispatch => {
    try {
        dispatch(createAction(movieTypes.GET_MOVIE_REQUEST, {}));
        const { data } = await movieApi.getById(id);
        dispatch(createAction(movieTypes.GET_MOVIE_SUCCESS, data.content));
    } catch (err) {
        dispatch(createAction(movieTypes.GET_MOVIE_FAIL, err));
    }
}