import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./userTypes";
const initialState = {
  loading: true, //data being fetch or not
  date: [], //list of users
  error: "", //store the error in case of API fails
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...initialState,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
      default:
        return state;
  }
};

export default userReducer;
