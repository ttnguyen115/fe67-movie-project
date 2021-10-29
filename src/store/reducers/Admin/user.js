import { AdminUserTypes } from "../../actions/type";

const userUserInitialState = {
  loading: false,
  error: null,
  userList: [],
};

const userUserReducer = (state = userUserInitialState, { type, payload }) => {
  switch (type) {
    case AdminUserTypes.ADMIN_GET_USER_REQUEST:
      state.loading = true;
      return { ...state };
    case AdminUserTypes.ADMIN_GET_USER_SUCCESS:
      state.loading = false;
      state.error = null;
      state.userList = payload;
      return { ...state };
    case AdminUserTypes.ADMIN_GET_USER_FAILURE:
      state.loading = false;
      state.error = payload;
      return { ...state };

    default:
      return state;
  }
};

export default userUserReducer;
