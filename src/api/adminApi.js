import axiosClient from ".";

const token = localStorage.getItem("token");

const movieDashboardApi = {
  getMovies: ({ tenPhim, soTrang }) => {
    const url = "/QuanLyPhim/LayDanhSachPhimPhanTrang";
    return axiosClient.get(url, {
      params: { tenPhim, soTrang },
    });
  },

  getMovieById: (movieId) => {
    const url = "/QuanLyPhim/LayThongTinPhim";
    return axiosClient.get(url, {
      params: {
        maPhim: movieId,
      },
    });
  },

  addMovie: (formData) => {
    const url = "/QuanLyPhim/ThemPhimUploadHinh";
    return axiosClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  editMovie: (formData) => {
    const url = "/QuanLyPhim/CapNhatPhimUpload";
    return axiosClient.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: "Bearer " + token,
      },
    });
  },

  deleteMovie: (movieId) => {
    const url = "/QuanLyPhim/XoaPhim";
    return axiosClient.delete(url, {
      params: {
        maPhim: movieId,
      },
      headers: {
        Authorization: "Bearer " + token,
      },
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
