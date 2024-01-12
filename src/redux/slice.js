import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 100,
  },
  reducers: {
    increment: state => {
      state.value += 1;
    },
  },
  // 1.slice name (name:)   
  // 2.initialState:
  //3.reducers:
});

export const {
  increment,
  // reducer-names
} = counterSlice.actions;

export default counterSlice.reducer;
