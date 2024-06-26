import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const BASE_URL = 'http://192.168.0.104:8000/';
// do dia chi ip wifi dang chay cua minh nha

export const endpoints = {
    'nhanvien': '/NhanVien/',
    'khachhang': '/KhachHang/',
    'taixe': '/TaiXe/',
    'ghe': '/Ghe/',
    'xe': '/Xe/',
    'them_NV': 'NhanVien/Them_NV/',
    'them_KH': 'KhachHang/Them_KH/',
    'them_KH_Di': 'KhachHangDi/Them_KH_Di/',
    'them_TX': 'TaiXe/Them_TX/',
    'them_Ve': 'VeXe/Them_VeXe/',
    'tuyenxe': '/TuyenXe/',
    'chuyenxe': '/ChuyenXe/',
    'login': '/o/token/',
    'current-user': '/users/current_user/',
    'comments': (chuyenxeID) => `/ChuyenXe/${chuyenxeID}/comments`,
    'them_comment': (chuyenxeID) => `ChuyenXe/${chuyenxeID}/Them_comments/`,
    'them_chi_tiet_ve': (vexeID) => `VeXe/${vexeID}/Them_Chi_Tiet_Ve/`,
    'trang_thai_ghe': (gheID) => `/Ghe/${gheID}/CapNhat_TT/`,
};

export const authAPI = (accessToken) => axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `bearer ${accessToken?accessToken:AsyncStorage.getItem("access_token")}`
    }
})

export default axios.create({
    baseURL: BASE_URL
});