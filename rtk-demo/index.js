const store = require('./app/store');
console.log(store);
const { cakeActions } = require("./features/cake/cakeSlice");
const { iceCreamSliceActions } = require('./features/icecream/iceCreamSlice');
const { fetchUsers } = require('./features/user/userSlice');
console.log("initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("updated state", store.getState());
});
store.dispatch(fetchUsers())
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));


// store.dispatch(iceCreamSliceActions.ordered());
// store.dispatch(iceCreamSliceActions.ordered());
// store.dispatch(iceCreamSliceActions.ordered());
// store.dispatch(iceCreamSliceActions.restocked(3));
// unsubscribe();
