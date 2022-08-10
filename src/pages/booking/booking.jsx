import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Chair from '../../modules/chair/chair';
import { bookingTicketApi, fetchRoomApi } from '../../services/booking';
import {useNavigate} from 'react-router-dom'
import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import './index.scss'

export default function Booking() {
    const [loadings, setLoadings] = useState([]);

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

    const navigate = useNavigate();
    const [danhSachGhe, setDanhSachGhe] = useState([]);

    const [roomList, setRoomList] = useState();

    const params = useParams();

    useEffect(() => {
        fetchRoomList();
    }, [])

    const fetchRoomList = async () => {
        const result = await fetchRoomApi(params.maLichChieu);

        setRoomList(result.data.content);
        console.log(result.data.content);
    }

    const handleSelect = (selectedChair) => {
        const data = [...danhSachGhe]

        const idx = data.findIndex(ele => ele.tenGhe === selectedChair.tenGhe);

        if (idx !== -1) {
            data.splice(idx, 1);
        } else {
            data.push(selectedChair);
        }



        setDanhSachGhe(data);
    }

    const handleBookingTicket = async () => {
        console.log(danhSachGhe);

        const danhSachVe = danhSachGhe.map(ele => {
            return{
                maGhe: ele.maGhe,
                giaVe: ele.giaVe,
            }
        });

        const submitData = {
            maLichChieu: params.maLichChieu,
            danhSachVe,
        }

        await bookingTicketApi(submitData);

        alert("successful ticket booking");
        navigate('/')
        
    }

    const handleRender =() => {
        return(
            roomList.danhSachGhe.map((ele, idx) => {
                return (
                    <React.Fragment key={ele.tenGhe}>
                        <Chair handleSelect={handleSelect} item={ele}></Chair>
                        {(idx + 1) % 16 === 0 && <br />}
                    </React.Fragment>
                )
            })
        )
    }

    return roomList ? (
        <div className='row w-75 mx-auto my-5'>
            <div className="col-8">
            <div className='screen mr-auto my-5'><p>Screen</p></div>
                {
                   handleRender()
                }
                <div>
                    <div>
                        <div className='badge badge-info text-info'>oo</div><span>VIP</span>
                    </div>
                    <div>
                        <div className='badge badge-secondary text-muted'>oo</div><span>Normal</span>
                    </div>
                    <div>
                        <div className='badge badge-dark text-dark'>oo</div><span>Booked</span>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <img className='img-fluid' src={roomList?.thongTinPhim?.hinhAnh} alt="" />
                <h4>Name: {roomList?.thongTinPhim?.tenPhim}</h4>
                <p>Seat: {
                    danhSachGhe.map(ele => {
                        return (
                            <span key={ele.tenGhe} className='badge badge-info mx-1'>{ele.tenGhe} </span>
                        )
                    })
                }</p>
                <p>Total: {
                    danhSachGhe.reduce((pre, current) => {
                        pre += current.giaVe;

                        return pre;
                    }, 0).toLocaleString()
                } VND</p>
                <button onClick={handleBookingTicket} className="btn btn-info">Booking now</button>
            </div>
        </div>
    ) : <Button className='text-center' type="primary" loading>
          Loading
        </Button>
}
