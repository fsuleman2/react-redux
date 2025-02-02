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