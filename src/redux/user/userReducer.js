import {
  FETECH_USERS_REQUEST,
  FETECH_USERS_SUCCESS,
  FETECH_USERS_FAILURE,
} from "./userTypes";

const initialState = {
  loading: true,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETECH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETECH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };

    case FETECH_USERS_FAILURE:
      return {
        ...state,
        loading: true,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
