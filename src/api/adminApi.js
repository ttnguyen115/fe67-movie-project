import axiosClient from '.';

const movieDashboardApi = {
    getMovies: (tenPhim) => {
        const url = '/QuanLyPhim/LayDanhSachPhim';
        return axiosClient.get(url, {
            params: { tenPhim }
        });
    },
}

const userDashboardApi = {}

export {
    movieDashboardApi,
    userDashboardApi
}

