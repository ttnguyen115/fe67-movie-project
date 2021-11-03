import axiosClient from '.';

const token = localStorage.getItem('token');

const movieDashboardApi = {
    getMovies: ({ tenPhim, soTrang }) => {
        const url = '/QuanLyPhim/LayDanhSachPhimPhanTrang';
        return axiosClient.get(url, {
            params: { tenPhim, soTrang }
        });
    },

    getMovieById: movieId => {
        const url = '/QuanLyPhim/LayThongTinPhim';
        return axiosClient.get(url, {
            params: {
                maPhim: movieId
            }
        });
    },

    addMovie: formData => {
        const url = '/QuanLyPhim/ThemPhimUploadHinh';
        return axiosClient.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    },

    editMovie: formData => {
        const url = "/QuanLyPhim/CapNhatPhimUpload";
        return axiosClient.post(url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: 'Bearer ' + token
            }
        })
    },

    deleteMovie: movieId => {
        const url = "/QuanLyPhim/XoaPhim";
        return axiosClient.delete(url, {
            params: {
                maPhim: movieId
            },
            headers: {
                Authorization: 'Bearer ' + token
            }
        });
    },

    getTheaterList: () => {
        const url = '/QuanLyRap/LayThongTinHeThongRap';
        return axiosClient.get(url);
    },

    getTheaterById: theaterName => {
        const url = '/QuanLyRap/LayThongTinCumRapTheoHeThong';
        return axiosClient.get(url, {
            params: {
                maHeThongRap: theaterName
            }
        })
    },

    addShowtime: dataValues => {
        const url = '/QuanLyDatVe/TaoLichChieu';
        return axiosClient.post(url, dataValues, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
    }
}

const userDashboardApi = {}

export {
    movieDashboardApi,
    userDashboardApi
}

