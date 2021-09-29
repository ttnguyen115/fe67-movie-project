import axiosClient from ".";

export const movieApi = {
    getBanners: () => {
        const url = '/QuanLyPhim/LayDanhSachBanner';
        return axiosClient.get(url);
    },

    getAll: () => {
        const url = '/QuanLyPhim/LayDanhSachPhim';
        return axiosClient.get(url);
    },

    getById: id => {
        const url = '/QuanLyPhim/LayThongTinPhim';
        return axiosClient.get(url, {
            params: {
                maPhim: id
            }
        });
    },

    getRoomTicket: id => {
        const url = '/QuanLyRap/LayThongTinLichChieuPhim';
        return axiosClient.get(url, {
            params: {
                maPhim: id
            }
        })
    }
}