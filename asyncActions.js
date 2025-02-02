const redux = require('redux');
const createStore = redux.createStore;
//Step 1: State
const initialState = {
  loading: false,
  users: [],
  error: "",
};

//Step 2: Actions: we are gonna have 3 actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// Step 3: Action creators

const featchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
const featchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const featchUserFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// Step 3: Reducer

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return{
                ...initialState,
                loading : true
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading : false,
                users : action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return{
                loading : false,
                users:[],
                error: action.payload
            }
    
        default:
            break;
    }
}

const store = createStore(reducer);
//dispatching
