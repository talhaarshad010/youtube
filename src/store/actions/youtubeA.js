import {YOUTUBE_FAILURE, YOUTUBE_REQUEST, YOUTUBE_SUCCESS} from './actionstype';
export const request = payload => {
  return {
    payload: payload,
    type: YOUTUBE_REQUEST,
  };
};
export const success = payload => {
  return {
    payload: payload,
    type: YOUTUBE_SUCCESS,
  };
};
export const failure = payload => {
  return {
    payload: payload,
    type: YOUTUBE_FAILURE,
  };
};
