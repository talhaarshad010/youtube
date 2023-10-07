import axios from 'axios';
import {failure, request as sig, success} from '../actions/signInA';
import {
  failure as POST_FAI,
  request as POST_REQ,
  success as POST_SUC,
} from '../actions/postApiA';
export const PostApiForUsers = async (
  dispatch: any,
  uri: any,
  payload: Object,
  ) => {
  dispatch(POST_REQ(payload));
  await axios
    .post(uri,payload)
    .then(data => {
      console.log('check user data', data);
      dispatch(POST_SUC(data.data));
    })
    .catch(err => {
      dispatch(POST_FAI(err));
    });
};
