import { createAction } from '..';
import { adminTypes } from '../type';
import { movieDashboardApi } from '../../../api/adminApi';

export const getAdminMovieList = dataValues => async dispatch => {
    try {
        dispatch(createAction(adminTypes.ADMIN_GET_MOVIES_REQUEST));
        const { data } = await movieDashboardApi.getMovies(dataValues);
        dispatch(createAction(adminTypes.ADMIN_GET_MOVIES_SUCCESS, data.content));
    } catch (err) {
        dispatch(createAction(adminTypes.ADMIN_GET_MOVIES_FAILURE, err?.response?.data.message));
    }
}

export const getAdminMovieById = (movieId, callback) => async dispatch => {
    try {
        dispatch(createAction(adminTypes.ADMIN_GET_MOVIE_BY_ID_REQUEST));
        const { data } = await movieDashboardApi.getMovieById(movieId);
        dispatch(createAction(adminTypes.ADMIN_GET_MOVIE_BY_ID_SUCCESS, data.content));
        callback();
    } catch (err) {
        dispatch(createAction(adminTypes.ADMIN_GET_MOVIE_BY_ID_FAILURE, err?.response?.data.message));
    }
}

export const addNewMovie = formData => async dispatch => {
    try {
        dispatch(createAction(adminTypes.ADMIN_ADD_MOVIE_REQUEST));
        const { data, message } = await movieDashboardApi.addMovie(formData);
        dispatch(createAction(adminTypes.ADMIN_ADD_MOVIE_SUCCESS, data.content));
        console.log(message);
    } catch (err) {
        dispatch(createAction(adminTypes.ADMIN_ADD_MOVIE_FAILURE, err?.response?.data.message));
    }
}

export const editMovie = formData => async dispatch => {
    try {
        dispatch(createAction(adminTypes.ADMIN_EDIT_MOVIE_REQUEST));
        const { data, message } = await movieDashboardApi.editMovie(formData);
        dispatch(createAction(adminTypes.ADMIN_EDIT_MOVIE_SUCCESS, data.content));
        console.log(message);
    } catch (err) {
        dispatch(createAction(adminTypes.ADMIN_EDIT_MOVIE_FAILURE, err?.response?.data.message));
    }
}