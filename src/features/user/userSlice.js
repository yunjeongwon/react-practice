import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  logInData: {},
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeNickname: (state, action) => {
      state.nickname = action.payload;
    },
  },
});

export const { changeNickname } = userSlice.actions;

export default userSlice.reducer;
