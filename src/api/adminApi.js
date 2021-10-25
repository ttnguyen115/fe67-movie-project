import axiosClient from '.';

const movieDashboardApi = {
    getMovies: ({ tenPhim, soTrang, soPhanTuTrenTrang}) => {
        const url = '/QuanLyPhim/LayDanhSachPhimPhanTrang';
        return axiosClient.get(url, {
            params: { tenPhim, soTrang }
        });
    },
}

const userDashboardApi = {}

export {
    movieDashboardApi,
    userDashboardApi
}

