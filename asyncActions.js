/******************* IMPORTS STARTS***************************** */
const redux = require('redux');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').thunk
const axios = require('axios');
/******************* IMPORTS ENDS***************************** */
//Step 1: State
const initialState = {
  loading: false,
  users: [],
  error: "No Error",
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

//action creator
//what thunk middleware brings to the table is the ability for the action creator
//to return a function instead of an action object
const fetchUsers = () => {
    return function(dispatch){
        //dispatching
        dispatch(featchUserRequest());//setting loading to true
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            //response.data is the array of users
            const usersIds = response.data //.map(users => users.id);
            dispatch(featchUserSuccess(usersIds));
        })
        .catch(error => {
            //error.message
            dispatch(featchUserFailure(error.message));
        })
    }

}
const store = createStore(reducer,applyMiddleware(thunkMiddleware));
store.subscribe(()=> console.log(store.getState()));
store.dispatch(fetchUsers())
