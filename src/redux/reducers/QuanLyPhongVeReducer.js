const { LAY_DANH_SACH_GHE } = require("../constants/QuanLyPhongVeConstant");

const initialState = {
    danhSachGhe: []
}

const QuanLyPhongVeReducer = (state = initialState, actions) => {
    switch(actions.type) {
        case LAY_DANH_SACH_GHE: {
            state.danhSachGhe = actions.danhSachGhe;
            return {...state}
        }
        break;

        default:
            return {...state};
    }
};

export default QuanLyPhongVeReducer;