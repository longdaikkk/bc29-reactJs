import axios from "axios";
import { request } from "../configs/axios";
import { BASE_URL, TOKENCYBERSOFT } from "../constants/common";

const fetchMovieListApi = () => {
    return request({
        url: '/QuanLyPhim/LayDanhSachPhim?maNhom=GP02',
        method: 'GET',
    })
};

const fetchMovieDetailApi = (movieId) => {
    return request({
        url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
        method: 'GET',
    })
}

export {fetchMovieDetailApi, fetchMovieListApi};