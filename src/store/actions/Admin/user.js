import { createAction } from "..";
import { AdminUserTypes } from "../type";
import { userDashboardApi } from "../../../api/adminApi";

export const getAdminUserList = (dataValues) => async (dispatch) => {
  try {
    dispatch(createAction(AdminUserTypes.ADMIN_GET_USER_REQUEST, {}));
    const { data } = await userDashboardApi.getUser(dataValues);
    dispatch(createAction(AdminUserTypes.ADMIN_GET_USER_SUCCESS, data.content));
  } catch (err) {
    dispatch(createAction(AdminUserTypes.ADMIN_GET_USER_FAILURE, err.response));
  }
};

export const deleteUserItem = (TaiKhoan) => async (dispatch) => {
  try {
    const { data } = await userDashboardApi.deleteUser(TaiKhoan);
    console.log("data", data.content);
    alert(data.content);
    dispatch(getAdminUserList());
  } catch (err) {
    console.log("Error", err.response);
  }
};
