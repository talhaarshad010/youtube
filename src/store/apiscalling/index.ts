import axios from 'axios';
import {failure as USER_DATA_FA, request as USER_DATA_REQ, success as USER_DATA_SUC} from '../actions/userdataA';

export const GET_USER_DATA = async (dispatch:any, uri:any) => {
  await dispatch(USER_DATA_REQ());
  await axios
    .get(uri)
    .then(data => {
      console.log('check user data', data);
      dispatch(USER_DATA_SUC(data.data));
    })
    .catch(err => {
      dispatch(USER_DATA_FA(err));
    });
};
