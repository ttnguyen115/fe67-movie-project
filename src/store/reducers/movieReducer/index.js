import { movieTypes } from "../../actions/type"

const initialState = {
    selectedMovie: null,
    error: null,
    loading: false,
}

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case movieTypes.GET_MOVIE_REQUEST:
            state.loading = true;
            return { ...state };
        case movieTypes.GET_MOVIE_SUCCESS:
            state.loading = false;
            state.error = null;
            state.selectedMovie = payload;
            return { ...state };
        case movieTypes.GET_MOVIE_FAIL:
            state.loading = false;
            state.error = payload;
            return { ...state };
        
        case movieTypes.GET_SHOWTIME_REQUEST:
            state.loading = true;
            return { ...state };
        case movieTypes.GET_SHOWTIME_SUCCESS:
            state.loading = false;
            state.error = null;
            state.selectedMovie = payload;
            return { ...state };
        case movieTypes.GET_SHOWTIME_FAIL:
            state.loading = false;
            state.error = payload;
            return { ...state };

        default:
            return state;
    }
}

export default movieReducer
