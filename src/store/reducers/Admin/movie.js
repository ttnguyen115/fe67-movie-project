import { adminTypes } from "../../actions/type"

const adminMovieInitialState = {
    loading: false,
    error: null,
    movieList: [],
}

const adminMovieReducer = (state = adminMovieInitialState, { type, payload }) => {
    switch (type) {
        case adminTypes.ADMIN_GET_MOVIES_REQUEST:
            state.loading = true;
            return { ...state };
        case adminTypes.ADMIN_GET_MOVIES_SUCCESS:
            state.loading = false;
            state.error = null;
            state.movieList = payload;
            return { ...state };
        case adminTypes.ADMIN_GET_MOVIES_FAILURE:
            state.loading = false;
            state.error = payload;
            return { ...state };

        default:
            return state
    }
}

export default adminMovieReducer;
