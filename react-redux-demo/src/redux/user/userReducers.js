const initialState = {
  loading: true, //data being fetch or not
  date: [], //list of users
  error: "", //store the error in case of API fails
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
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
      break;
  }
};
