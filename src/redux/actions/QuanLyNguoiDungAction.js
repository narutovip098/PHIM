import axios from 'axios';
import { TOKEN, USER_LOGIN, DOMAIN } from '../../utility/ConfigWeb';



export const dangNhapApiAction = (userLogin, history) =>{
    return async dispatch => {

        try{
            let {data,status} = await axios ({
                url: DOMAIN + '/api/quanlynguoidung/dangnhap',
                method:'post',
                data:{
                    taiKhoan:userLogin.userName,
                    matKhau:userLogin.passWord
                }
            });
            if(status === 200){
            //Sau khi gọi api => dispatch lên redux
            dispatch({
                type:'DANG_NHAP',
                userLogin:data,
            });
            console.log(data)
            //Lưu vào localstorage
            localStorage.setItem(USER_LOGIN, JSON.stringify(data));

            localStorage.setItem(TOKEN,data.accessToken);

            history.goBack();
            // history.push("/");
        }
        }catch(err){
            console.log(err.response.data);
        }
    }
}