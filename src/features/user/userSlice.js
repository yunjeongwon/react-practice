import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  logInData: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeNickname: (state, action) => {
      state.nickname = action.payload;
    },
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    }
  },
});

export const { changeNickname, logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
