import React, { useEffect, useState } from 'react'
import { fetchMovieDetailApi } from '../../services/movie'
import { useParams } from 'react-router-dom'


export default function Detail() {
    const params = useParams();
    const [movieDetail, setMovieDetail] = useState({});

    useEffect(() => {
        fetchMovieDetail();
    }, [])

    const fetchMovieDetail = async () => {
        const result = await fetchMovieDetailApi(params.movieId);

        setMovieDetail(result.data.content);
    }

    const renderMovieDetail = () => {
        const {hinhAnh, moTa, tenPhim, ngayKhoiChieu} = movieDetail;
        return <div className="row">
            <div className="col-3">
                <img className="w-100" src={hinhAnh} />
            </div>
            <div className="col-9">
                <h4>{tenPhim}</h4>
                <p>
                    {moTa}
                </p>
                <p>{ngayKhoiChieu}</p>
                <div>
                    <button className="btn btn-info mr-2">TRAILER</button>
                </div>
            </div>
        </div>
    }

    return (
        renderMovieDetail()
    )
}
