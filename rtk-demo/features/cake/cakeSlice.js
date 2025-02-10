//first thing
const createSlice = require("@reduxjs/toolkit").createSlice;
const initialState = {
  numOfCake: 10,
};
const cakeSlice = createSlice({
  //auto gen action creators - no need to do it
  //1.name of slice
  name: "cake",
  //2. initial state
  initialState,
  //3.reucer function
  reducers: {
    ordered: (state, action) => {
      //we don't have to return the state, how we use to ..init
      //directly we can mutate it
      state.numOfCake--;
    },
    restocked: (state, action) => {
      state.numOfCake += action.payload;
    },
  },
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
