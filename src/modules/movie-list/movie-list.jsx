import { Button } from 'antd';
import React, { useEffect, useState} from 'react'
import { fetchMovieListApi } from '../../services/movie';
import {useNavigate} from 'react-router-dom' 
import './index.scss'

export default function MovieList() {
    const navigate = useNavigate(); //dùm để navigate sang 1 component khác
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetchMovieList();
    }, []);

    const fetchMovieList = async () => {
        const result = await fetchMovieListApi();

        setMovieList(result.data.content);
    }

    const renderMovieList = () => {
        return movieList.map(ele => {
            return <div className="col-3" key={ele.maPhim}>
                <div className="animate__zoomIn animate__animated card movie-card wow" style={{ marginBottom: 20, height: 500 }}>
                    <img style={{ height: 350, objectFit: 'cover' }} className="card-img-top" src={ele.hinhAnh} alt="movie" />
                    <div className="card-body">
                        <h5 className="card-title text-center">{ele.tenPhim}</h5>
                        <button className='button_chiTiet' size='large' onClick={() => navigate(`/movie/${ele.maPhim}`)}>
                        Buy ticket
                        </button>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="row mt-3 mx-auto w-75">
            {renderMovieList()}
        </div>
    )
}
