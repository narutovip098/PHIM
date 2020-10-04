import React, {useEffect} from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { layDanhSachGheAPI } from '../../redux/actions/QuanLyPhongVeAction'

export default function Booking(props) {

    const dispatch = useDispatch();

    useEffect(()=>{
        //call api
        dispatch(layDanhSachGheAPI());
    },[])

    //Nếu có login thì cho phép đặt vé, không có thì chuyển hướng sang trang đăng nhập
    if (localStorage.getItem('userLogin')) {
        return (
            <div>
                Đặt vé
            </div>
        )
    }
    return (
        <Redirect to='/login' />
    )
}
