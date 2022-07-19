import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mainPosts: [],
};

export const postSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
});

export const { increment, decrement, incrementByAmount } = postSlice.actions;

export default postSlice.reducer;
