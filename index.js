const redux = require('redux');
const createStore = redux.createStore;

//Action Name
const BUY_CAKE = 'BUY_CAKE';

//Action Creator
function buyCake () {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

//(previousState, action) => newState

const initialState = {
    numOfCakes: 10 //default value
}

//defining the reducer function

const reducer = (state= initialState, action) =>{
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state;
    }
}

// V Imp to note here we're not mutating the state object instead we're returning the new Object
// our initial State might contain more than one property that is why we we should always create
// copy of the state object and then change only the properties that needs to.
// To make the copy of the state object we basically use the spread operator. and update only
// specific value and other values will remain unchanged

const store = createStore(reducer);
console.log('initial state',store.getState());

const unsubscribed = store.subscribe(()=>console.log("Updated State",store.getState()));
//third responsibility
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribed();