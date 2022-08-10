import axios from "axios";
import { request } from "../configs/axios";

const fetchCinemaApi = (movieId) => {
    return request({
        url: `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
        method: 'GET',
    })
}

export {fetchCinemaApi};