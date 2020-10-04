import Axios from 'axios'


export const layDanhSachGheAPI = () =>{
    return (dispatch) =>{
        //axios
        Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=16914',
            method: 'GET',
        })
        .then((result)=> {
            console.log(result);
            dispatch({
                type: 'LAY_DANH_SACH_GHE',
                danhSachGhe: result.data.danhSachGhe,
            });
        })
        .catch((err)=> {
            console.log(err);
        })
    };
};