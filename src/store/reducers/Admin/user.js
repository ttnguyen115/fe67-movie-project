import { adminTypes } from "../../actions/type"

const userUserInitialState = {
    loading: false,
    error: null,
    userList: [],
}

const userUserReducer = (state = userUserInitialState, { type, payload }) => {
    switch (type) {

        default:
            return state
    }
}

export default userUserReducer;
