import { request } from "../configs/axios"

const fetchRoomApi = (showTimeId) => {
    return request({
        url: `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimeId}`,
        method: "get",
    })
}

const bookingTicketApi = data => {
    return request({
        url: '/QuanLyDatVe/DatVe',
        method: 'POST',
        data,
    })
}
export{fetchRoomApi, bookingTicketApi}