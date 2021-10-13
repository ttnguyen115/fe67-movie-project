import { authTypes } from "../actions/type";

const initialState = {
    currentUser: null,
    loading: false,
    error: null,
}

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case authTypes.SIGN_UP_REQUEST:
            state.loading = true;
            return { ...state };
        case authTypes.SIGN_UP_SUCCESS:
            state.loading = false;
            state.error = null;
            return { ...state };
        case authTypes.SIGN_UP_FAIL:
            state.loading = false;
            state.error = payload;
            return { ...state };

        default: return state;
    }
}

export default userReducer;
