// call api carousel
import axios from "axios";
import { actionTypes } from "./type";
import { createAction } from ".";

export const fetchCarousels = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
        method: "GET",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyOS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM0MTQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzU2MjAwMH0.N1IDGkovxIU1E2CjtI_QtEJksOO3lxZxuIwXABaa45w",
        },
      });
      // console.log(res.data);
      // đưa data lên reduce
      dispatch(createAction(actionTypes.FETCH_CAROUSEL, res.data));
    } catch (err) {
      console.log(err);
    }
  };
};
