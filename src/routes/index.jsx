import React from 'react'
import {useRoutes} from 'react-router-dom'
import AdminGuard from '../guards/admin.guard'
import AuthGuard from '../guards/auth-guard'
import NoAuthGuard from '../guards/no-auth.guard'
import AdminLayout from '../layouts/admin'
import HomeLayout from '../layouts/home'
import Booking from '../pages/booking/booking'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import MovieDetail from '../pages/movie-detail/movie-detail'
import MovieManagement from '../pages/movie-management/movie-management'

export default function Router() {
    const routing = useRoutes([
        {
            path:'/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/movie/:movieId',
                    element: <MovieDetail></MovieDetail>
                },
                {
                    path: '/',
                    element: <NoAuthGuard></NoAuthGuard>,
                    children: [
                        {
                            path: '/login',
                            element: <Login></Login>
                        }
                    ]
                },
                {
                    path: '/',
                    element: <AuthGuard></AuthGuard>,
                    children: [
                        {
                            path: '/booking/:maLichChieu',
                            element: <Booking></Booking>
                        }
                    ]
                }
            ]
        },
        {
            path: "/admin",
            element: <AdminLayout></AdminLayout>,
            children: [
                {
                    path:'/admin/',
                    element: <AdminGuard></AdminGuard>,
                    children: [
                        {
                            path: "/admin/movie-management",
                            element: <MovieManagement></MovieManagement>
                        }
                    ]
                }
            ]
        }
    ])
        
  return (
    routing
  )
}
