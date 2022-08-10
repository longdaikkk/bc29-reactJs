import React, { useEffect } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';
import {notification} from "antd";

export default function AdminGuard() {
    const userState = useSelector((state) => state.userReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if(!userState.userInfo){
            return navigate("/login");
        }

        if(userState.userInfo && userState.userInfo.maLoaiNguoiDung !== "QuanTri"){
            notification.warning({
                message: "khong vao duoc r ba"
            })
            return navigate("/");
        }
    }, []);


  return (
    <Outlet>

    </Outlet>
  )
}
