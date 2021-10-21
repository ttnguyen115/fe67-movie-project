import { createAction } from '..';
import { adminTypes } from '../type';
import { movieDashboardApi } from '../../../api/adminApi';

export const getAdminMovieList = (tenPhim) => async dispatch => {
    try {
        dispatch(createAction(adminTypes.ADMIN_GET_MOVIES_REQUEST));
        let { data } = await movieDashboardApi.getMovies(tenPhim);
        dispatch(createAction(adminTypes.ADMIN_GET_MOVIES_SUCCESS, data.content));
    } catch (err) {
        dispatch(createAction(adminTypes.ADMIN_GET_MOVIES_FAILURE, err.response));
    }
}