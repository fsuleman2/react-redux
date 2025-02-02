# React Redux Notes
- React is a library used to build User interfaces.
- Redux is a library for managing state in a predictable way in JS.
- React-Redux is a library that provides bindings to use react and redux together in an application.

## Three Core Concepts in Redux
- Store: Holds the state of your application ex: Cake Shop
- Action: that describes the changes in the state of the application. eg: Intention to Buy Cake
- Reducer: Which actually caries out the state transition depending on the action. ex: Shopkeeper

## Three Principles
1. First Principle: The State of your whole application is stored in an object tree within in a single store.
   1. {no. of Cakes:10} //cake shop inventory
2. Second Principle: The only way to change the state is to emit an action, an object describing what happened
   1. To Update the store of your app, you need to let Redux Know about that with an action
   2. Not Allowed to directly update the state of an Object
   3. CakeShop: let the shopkeeper know about our action - BUY_CAKE {type: BUY_CAKE}
3. To Specify how the state tree is transformed by actions, you write pure reducers
   1. Second Principle says that the State can only be transformed by emitting the actions, but how it get transformed is what third principles covers and it tells us that we need to write pure reducers to determine how the state changes pure reducers are pure functions that takes previous state and action as input and return the next state & being pure functions the reducer instead of updating the previous should return a new state in our cake shop example the reducer is the shop keeper.
   2. For example: When you tell him you want to buy a cake, shopkeeper will take one off from the shelf, reduces his cake count by one, print the receipt, and hand you the cake.
   3. Same goes with your JS function that accepts the current state and action as parameter based on what action type its new state object is returned in our scenario, the type is BUY_CAKE, so we simply reduce the count by 1 and return the new count. 
``` Javascript
const reducer = (state, action) => {
    switch(action.type){
        case BUY_CAKE: return {
            numOfCakes: state.numOfCakes - 1;
        }
    }
}
```
<br/>
1. the state of our applicaton is maintained in Redux Store and our Application always subscribed to Redux Store, However our application cannot directly updates the state
2. If it has to, it must dispatch an action.
3. Once the action has been dispatched the Reducer(fn) handles the action and update the current state.
4. As soon as the state is updated, the value is then passed on to the application because our app is already subscribed to redux store.

#### Actions
- The only way your application can interact with the store
- Carry some information from your app to the redux store
- Plain Javascript objects
- Have a 'type' property that indicates the type of action being performed
- The 'type' property is typically defined as string constants
``` javascript
//Action Name
const BUY_CAKE = 'BUY_CAKE';

//Action Creator
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}
```
<br/>

#### Reducers
- Specify how the app's state changes in response to actions sent to the store
- Reducer is a function that accepts state and action as arguments, and return the next state of the application
- (previous, action) => newState

#### Redux Store
- One store for the enitre application
- Responsibilities
  1. Holds application state
  2. Allows access to state via getState()
  3. Allows state to be updated via dispatch(action)
  4. Registers listeners via subscribe(listener)
  5. Handles unregistering of listeners via the function returned by subscribe(listener)
#### How to deal with multiple actions, Action Creators and Reducers?

- we can write separate action, action creator and reducer function
- but if u see initalli we setup only one reducer to store 
  ``` javascript
  const store = createStore(reducer);
  ```

- Redux provide one function called as <bold>combined reducers</bold> by which we can combine mutiple reducers into single reducer, which then can be passed to createStore method
``` javascript
const combinedReducers = redux.combineReducers;
const rootReducer = combinedReducers({
    //key: reducerFnName
    cake : cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer);
```
- we can specify key anything but value should be the name of the reducer which given already

<br/>

### Middleware
- It is the suggested way to extend Redux with custom functionality
- It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer
- We can use middleware for logging, crash reporting, performing asynchrounous tasks etc...
#### Installation

```bash
npm i --save redux-logger
```
- will first import it
``` javascript
const reduxLogger = require('redux-logger');
```
- then store it in one const as we are in JS
``` javascript
const logger = reduxLogger.createLogger();
```
- we create applyMiddleware from 'react'
``` javascript
const applyMiddleware = redux.applyMiddleware;
```
- we update our store to use applyMiddleware
``` javascript
const store = createStore(rootReducer,applyMiddleware(logger));
```
<br/>

### Async Actions

#### Synchronous Actions
1. As soon as an action was dispatched, the state was immediately updated.
2. If you dispatch the BU_CAKE action, the numfCakes was right away decremented by 1.
3. Same with BUY_ICECREAM action as well.

#### Async Actions
- Asynchronous API calls to fetch data from an end point and use that data in your application.
- To demo this Asynch Actions we're gonna build one small app
- Which fetched a lis to users from an API end point and stores it in the store.
  1. State: Typically for data fetching will go with 3 flags
   ``` javascript
   state = {
    loading: true,
    data:[],//users data
    error:''
   }
   ```
  2. Actions: we are gonna have 3 actions
     1. FETCH_USERS_REQUEST - Fetch list of users
     2. FETCH_USERS_SUCCESS - Fetched Successfully
     3. FETCH_USERS_FAILURE - Error fetching the data
  
  3. Reducer: 
     1. case:  FETCH_USERS_REQUEST
                loading: true
     2. case: FETCH_USERS_SUCCESS
                loading: false
                users: data(from API)
     3. FETCH_USERS_FAILURE
                loading: false
                error: error(from API)

### Async action creators (for API CALL)
#### packages
- axios: Requests to an API end point
- redux-thunk : this library is an middleware to  define async action creators
  
``` bash
npm install axios redux-thunk
```
- Redux Thunk is a middleware for Redux that allows you to write action creators that return a function instead of an action. This is especially useful for handling asynchronous operations, like fetching data from an API or performing side effects.

- Here’s a simple explanation:

1. In Redux, actions are plain objects that represent a change or event in the application.

2. Middleware like Redux Thunk lets you handle complex logic within your action creators.

3. With Thunk, you can delay the dispatch of an action or dispatch only if certain conditions are met.
