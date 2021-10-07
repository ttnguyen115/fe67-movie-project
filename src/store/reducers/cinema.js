import { actionTypes } from "../actions/type";

const initialState = {
  // state
  cinema: [],
  cinemaTimes: [],
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    //

    case actionTypes.FETCH_CINEMA_TIMES: {
      state.cinemaTimes = payload;
      return { ...state };
    }

    default:
      return state;
  }
};

export default reducers;
