import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
const initialState = {
  numOfCakes: 10,
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
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default  cakeSlice.reducer;
export const {ordered,restocked} = cakeSlice.actions;
