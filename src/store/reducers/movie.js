import { actionTypes } from "../actions/type";

const initialState = {
  movieList: [],
  selectedMovie: null,
  error: null,
  loading: false,
  bookingTicket: [],
};

const reducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_MOVIES_REQUEST:
      state.loading = true;
      return { ...state };
    case actionTypes.FETCH_MOVIES_SUCCESS:
      state.loading = false;
      state.error = null;
      state.movieList = payload;
      return { ...state };
    case actionTypes.FETCH_MOVIES_FAIL:
      state.loading = false;
      state.error = payload;
      return { ...state };

    case actionTypes.FETCH_MOVIE_REQUEST:
      state.loading = true;
      return { ...state };
    case actionTypes.FETCH_MOVIE_SUCCESS:
      state.loading = false;
      state.error = null;
      state.selectedMovie = payload;
      return { ...state };
    case actionTypes.FETCH_MOVIE_FAIL:
      state.loading = false;
      state.error = payload;
      return { ...state };

    case actionTypes.FETCH_SHOWTIME_REQUEST:
      state.loading = true;
      return { ...state };
    case actionTypes.FETCH_SHOWTIME_SUCCESS:
      state.loading = false;
      state.error = null;
      state.selectedMovie = payload;
      return { ...state };
    case actionTypes.FETCH_SHOWTIME_FAIL:
      state.loading = false;
      state.error = payload;
      return { ...state };

    case actionTypes.BOOKING_TICKET:
      const cloneBookingTicket = [...state.bookingTicket];
      const foundIndex = cloneBookingTicket.findIndex(
        (seatSelect) => seatSelect.maGhe === payload.maGhe
      );

      if (foundIndex !== -1) {
        cloneBookingTicket.splice(foundIndex, 1);
      } else {
        cloneBookingTicket.push(payload);
      }
      return { ...state, bookingTicket: cloneBookingTicket };

    default:
      return state;
  }
};

export default reducers;
