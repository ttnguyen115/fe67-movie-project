import { actionTypes } from "../actions/type";

const initialState = {
  // state
  CarouselList: [],
};

const reducers = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    //
    case actionTypes.FETCH_CAROUSEL: {
      state.CarouselList = payload;
      return { ...state };
    }

    default:
      return state;
  }
};

export default reducers;
