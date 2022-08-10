import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { USER_INFO_KEY } from '../../constants/common';
import { setUserInfoAction } from '../../store/actions/user.action';

export default function Header() {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem(USER_INFO_KEY);
        dispatch(setUserInfoAction(null));
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">
            <h3><i className="fa-solid fa-film text-info" />
              Cinema</h3>
            </NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink className="nav-link ml-5" to="/"> HOME </NavLink>
                    </li>
                </ul>
                <div className="ml-auto">
                    {
                        !userState.userInfo ? (
                            <>
                                <button onClick={() => {
                                    navigate('/login')
                                }} className="btn btn-outline-info my-2 my-sm-0">Login</button>
                            </>
                        ) : (
                            <>
                                <span className='text-info'>Hello</span> <span className='badge badge-success mx-2'> {userState.userInfo.hoTen} </span>
                                <button onClick={handleLogout} className="btn btn-info" >Log out</button>
                            </>   
                        )
                    }
                </div>
            </div>
        </nav>
    )
}
