import axiosClient from ".";

export const movieApi = {
    getBanners: () => {
        const url = '/QuanLyPhim/LayDanhSachBanner';
        return axiosClient.get(url);
    },

    getAll: () => {
        const url = '/QuanLyPhim/LayDanhSachPhim';
        return axiosClient.get(url, {
            params: {
                maNhom: 'GP07'
            }
        });
    },

    getMovieById: id => {
        const url = '/QuanLyRap/LayThongTinLichChieuPhim';
        return axiosClient.get(url, {
            params: {
                maPhim: id
            }
        })
    },

    getShowtimeByMovieId: id => {
        const url = '/QuanLyDatVe/LayDanhSachPhongVe';
        return axiosClient.get(url, {
            params: {
                MaLichChieu: id
            }
        })
    },

    getMoviesByCinema: () => {
        const url = '/QuanLyRap/LayThongTinLichChieuHeThongRap';
        return axiosClient.get(url, {
            params: {
                maNhom: 'GP07'
            }
        })
    }
}