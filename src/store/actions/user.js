import { createAction } from "."
import { userApi } from "../../api/userApi";
import { authTypes } from "./type"

export const signup = (values, handleRedirect) => async dispatch => {
    try {
        dispatch(createAction(authTypes.SIGN_UP_REQUEST, {}));
        const { statusCode, message } = await userApi.signup(values);
        if (statusCode === 200) handleRedirect();
        dispatch(createAction(authTypes.SIGN_UP_SUCCESS, {}));
    } catch (err) {
        dispatch(createAction(authTypes.SIGN_UP_FAIL, err.response.data.content));
    }
}

export const signin = (values, handleRedirect) => async dispatch => {
    try {
        dispatch(createAction(authTypes.SIGN_IN_REQUEST, {}));
        const { data } = await userApi.signin(values);
        dispatch(createAction(authTypes.SIGN_IN_SUCCESS, data.content));
        localStorage.setItem('token', data.content.accessToken);
        handleRedirect();
    } catch (err) {
        dispatch(createAction(authTypes.SIGN_IN_FAIL, err.response.data.content));
    }
}

export const refreshToken = token => async dispatch => {
    try {
        dispatch(createAction(authTypes.REFRESH_TOKEN_REQUEST, {}));
        const { data } = await userApi.refreshToken(token);
        dispatch(createAction(authTypes.REFRESH_TOKEN_SUCCESS, data.content));
    } catch (err) {
        dispatch(createAction(authTypes.REFRESH_TOKEN_FAIL, err.response?.data.content));
    }
}

export const editUserInfo = values => async dispatch => {
    try {
        const token = localStorage.getItem('token');
        dispatch(createAction(authTypes.EDIT_USER_REQUEST, {}));
        const res = userApi.editUser({ ...values, token });
        console.log(res);
        // dispatch(createAction(authTypes.EDIT_USER_SUCCESS, data.content));
    } catch (err) {
        dispatch(createAction(authTypes.EDIT_USER_FAIL, err.response.data.content))
    }
}