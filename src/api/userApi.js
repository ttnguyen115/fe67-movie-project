import axiosClient from ".";

export const userApi = {
    signup: ({ taiKhoan, matKhau, email, soDt, hoTen }) => {
        const url = "/QuanLyNguoiDung/DangKy";
        return axiosClient.post(url, {
            taiKhoan, matKhau, email, soDt, maNhom: "GP07", hoTen
        });
    },

    signin: ({ taiKhoan, matKhau }) => {
        const url = "/QuanLyNguoiDung/DangNhap";
        return axiosClient.post(url, {
            taiKhoan, matKhau, maNhom: "GP07"
        })
    },

    refreshToken: ({ taiKhoan, token }) => {
        const url = "/QuanLyNguoiDung/LayThongTinNguoiDung";
        return axiosClient.get(url, {
            headers: {
                Authorization: "Bearer " + token
            },
            params: {
                taiKhoan
            }
        })
    }
}