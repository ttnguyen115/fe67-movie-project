import axiosClient from '.';

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
    }
}

const userDashboardApi = {}

export {
    movieDashboardApi,
    userDashboardApi
}

