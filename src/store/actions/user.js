import { createAction } from "."
import { userApi } from "../../api/userApi";
import { authTypes } from "./type"

export const signup = values => async dispatch => {
    try {
        dispatch(createAction(authTypes.SIGN_UP_REQUEST, {}));
        const { statusCode, message, content } = await userApi.signup(values);
        if (statusCode === 200) console.log(message);
        dispatch(createAction(authTypes.SIGN_UP_SUCCESS, {}));
    } catch (err) {
        dispatch(createAction(authTypes.SIGN_UP_FAIL, err.response.data.content));
    }
}