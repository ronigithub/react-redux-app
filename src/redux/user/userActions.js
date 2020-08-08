import {
  FETECH_USERS_REQUEST,
  FETECH_USERS_SUCCESS,
  FETECH_USERS_FAILURE,
} from "./userTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETECH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETECH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETECH_USERS_FAILURE,
    payload: error,
  };
};
