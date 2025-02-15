import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  numOfIceCreams: 20,
};
const iceCreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    ordered: (state,action) => {
      state.numOfIceCreams -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  //perform two action whenever cake is ordered we decrement cake as well as icecream means we are giving ice cream free if cake is purchased
  extraReducers: (builder) => {
    builder.addCase(ordered, (state) => {
      state.numOfIceCreams--;
    });
  },
});

export default iceCreamSlice.reducer;
export const{ordered,restocked} = iceCreamSlice.actions;
