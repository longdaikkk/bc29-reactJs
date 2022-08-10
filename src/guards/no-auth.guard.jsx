import React, { useEffect } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports';

export default function NoAuthGuard() {
    const userState = useSelector((state) => state.userReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if(userState.userInfo){
            navigate("/");
        }
    }, []);


  return (
    <Outlet>

    </Outlet>
  )
}
