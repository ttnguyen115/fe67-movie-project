import axios from "axios";

// const TokenCybersoft = process.env.REACT_APP_CYBERSOFT_TOKEN;
const TokenCybersoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjciLCJIZXRIYW5TdHJpbmciOiIyOS8wMS8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDM0MTQ0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0MzU2MjAwMH0.N1IDGkovxIU1E2CjtI_QtEJksOO3lxZxuIwXABaa45w";

const axiosClient = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api",
  headers: {
    TokenCybersoft: TokenCybersoft,
  },
});

export default axiosClient;
