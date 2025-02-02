/******************* IMPORTS STARTS***************************** */
const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const combinedReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
/******************* IMPORTS ENDS***************************** */
//Action Name
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAMS='BUY_ICE_CREAMS';
//Action Creator
function buyCake () {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}
function buyIceCream () {
    return {
        type: BUY_ICE_CREAMS,
        info: 'Second Redux Action'
    }
}

//(previousState, action) => newState

const initialState = {
    numOfCakes: 10, //default value
    numOfIceCreams: 20
}
const initialCakeState = {
    numOfCakes: 10, //default value
}
const initialIceCreamState = {
    numOfIceCreams: 20
}

//defining the reducer function

const reducer = (state= initialState, action) =>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case BUY_ICE_CREAMS: return{
            ...state,
            numOfIceCreams:state.numOfIceCreams - 1
        }
        default: return state;
    }
}
//splitting reducer into separately
const cakeReducer = (state= initialCakeState, action) =>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}

//for IceCream
const iceCreamReducer = (state= initialIceCreamState, action) =>{
    switch(action.type){
        case BUY_ICE_CREAMS: return{
            ...state,
            numOfIceCreams:state.numOfIceCreams - 1
        }
        default: return state;
    }
}


// V Imp to note here we're not mutating the state object instead we're returning the new Object
// our initial State might contain more than one property that is why we we should always create
// copy of the state object and then change only the properties that needs to.
// To make the copy of the state object we basically use the spread operator. and update only
// specific value and other values will remain unchanged
const rootReducer = combinedReducers({
    cake : cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer,applyMiddleware(logger));
console.log('initial state',store.getState());

const unsubscribed = store.subscribe(()=>{});
//third responsibility
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribed();