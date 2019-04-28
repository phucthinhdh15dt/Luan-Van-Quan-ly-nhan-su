import callApi from '../../utils/ConnectApi';
import * as Types from './ActionTypes'; 

export const reqGetAllData = () => {
    return (dispatch) => {
        return callApi(`test/personnel`, 'GET', null, "null").then(res => {
            dispatch(actGetAllData(res.data));
        }).catch(error => console.log("Fetch Error "+ error));
    }
}

export const actGetAllData = (data) => {
    return {
        type: Types.LIST_PERSONNEL_ALL,
        data
    }
}

