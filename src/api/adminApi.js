import axiosClient from ".";

const movieDashboardApi = {
  getMovies: ({ tenPhim, soTrang, soPhanTuTrenTrang }) => {
    const url = "/QuanLyPhim/LayDanhSachPhimPhanTrang";
    return axiosClient.get(url, {
      params: { tenPhim, soTrang },
    });
  },
};

const userDashboardApi = {
  getUser: ({ tuKhoa, token }) => {
    const url = "/QuanLyNguoiDung/LayDanhSachNguoiDung";
    return axiosClient.get(url, tuKhoa, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  deleteUser: ({ taiKhoan, token }) => {
    const url = "/QuanLyNguoiDung/XoaNguoiDung";
    return axiosClient.delete(url, {
      params: {
        TaiKhoan: taiKhoan,
      },
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};

export { movieDashboardApi, userDashboardApi };
