import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { dangNhapApiAction } from '../../redux/actions/QuanLyNguoiDungAction';

//

export default function Login(props) {

    let dispatch = useDispatch();
    let history = useHistory();

    /*
     this.state = {
         userLogin: {
             userName:'',
             passWord:''
         }
     }
     */
    // const [state, setState] = useState({
    //     userLogin: {
    //         userName: '',
    //         passWord: ''
    //     }
    // });
    const [userLogin, setUserLogin] = useState({
        userName: '',
        passWord: ''
    })


 
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserLogin({
            ...userLogin,
            [name]: value
        })

        console.log(userLogin)
    }

    const login = (e) => {
        e.preventDefault(); //Ngăn sự kiện sau khi submit reload lại trang
        //Kiểm tra userName,passWord = cybersoft => Chuyển về trước đó ngược lạcybersofti báo lỗi
        // props.history.goBack(); //goBack chuyển hướng về trang trước link đến trang này

        // props.history.push('/home'); //chuyển hướng đến trang (path) chỉ định => home


        //props.history.replace('/home'); // thay đổi thành route tương ứng

        //Gọi api đăng nhập
        console.log(userLogin)
        dispatch(dangNhapApiAction(userLogin, history));

    }

    return (
        <form className="container" onSubmit={login}>
            <h3 className="display-4 text-center">Login</h3>
            <div className="form-group">
                <p>userName</p>
                <input name="userName" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <p>passWord</p>
                <input name="passWord" className="form-control" onChange={handleChange} />
            </div>
            <div className="form-group">
                <button className="btn btn-success" type="submit">Login</button>
            </div>
        </form>
    )
}



